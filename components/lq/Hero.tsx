import { Arrow, Corner, Cta } from "@/components/ui";

const VIBE_PILLARS = [
  {
    letter: "V",
    name: "Vision",
    focus: "Leadership & Strategic Direction",
  },
  {
    letter: "I",
    name: "Impact",
    focus: "Influence & Contribution",
  },
  {
    letter: "B",
    name: "Business Growth",
    focus: "Market Reputation & Opportunities",
  },
  {
    letter: "E",
    name: "Evolution",
    focus: "Alignment with Future Ambitions",
  },
];

// SECTION 1 — HERO
export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden bg-paper text-ink"
    >

      {/* Main hero grid: structured for clean above-the-fold visibility */}
      <div className="container-x grid flex-1 items-center gap-10 pt-24 sm:pt-28 lg:grid-cols-12 lg:gap-12 lg:pt-32 pb-8 sm:pb-12">
        {/* Left Column: Editorial Headline, Strategic Narrative & Immediate CTAs */}
        <div className="lg:col-span-7 xl:col-span-7">
          {/* Top prestige badge */}
          <div className="animate-fade inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-paper px-3.5 py-1.5">
            <span className="size-2 rounded-full bg-ink pulse-dot" aria-hidden="true" />
            <p className="eyebrow text-[0.68rem] tracking-[0.2em] font-medium text-ink/90 uppercase">
              The Level Quotient™ Evaluation
            </p>
          </div>

          {/* Headline with harmonious typography */}
          <h1
            id="hero-title"
            className="headline mt-5 text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-[3.35rem] xl:text-[4rem] 2xl:text-[4.5rem] leading-[1.08] tracking-tight"
          >
            <span className="serif-accent block font-normal animate-rise [animation-delay:60ms] text-ink">
              You&apos;ve Built Your Success
            </span>
            <span className="block font-light animate-rise [animation-delay:180ms] text-ink mt-1">
              Does Your Personal Brand Reflect It?
            </span>
          </h1>

          {/* Editorial structured narrative */}
          <div className="mt-5 max-w-xl animate-rise space-y-3.5 text-base sm:text-lg leading-[1.7] [animation-delay:280ms]">
            <p className="font-normal text-ink text-lg sm:text-xl tracking-tight">
              Your achievements speak for themselves.
            </p>
            <p className="text-muted leading-relaxed">
              Yet does your personal reputation truly reflect your experience, influence, and future ambitions?
            </p>
            <p className="text-sm sm:text-base text-ink/85 leading-relaxed font-normal">
              Discover where your personal brand stands today with the{" "}
              <strong className="font-semibold text-ink underline decoration-line-strong underline-offset-4">
                complimentary LQ™ Snapshot
              </strong>
              {" "}— understand your strengths, identify visibility gaps, and unlock opportunities to strengthen your professional reputation.
            </p>
          </div>

          {/* Prominent CTAs: visible immediately above the fold */}
          <div className="mt-8 flex animate-rise flex-col gap-3.5 [animation-delay:380ms] sm:flex-row sm:items-center sm:gap-5">
            <Cta label="Discover My LQ™ →" className="shadow-lg shadow-ink/10" />
            <a
              href="#how-it-works"
              data-magnetic
              className="glass group inline-flex h-12 items-center justify-center gap-2.5 rounded-full px-6 text-sm font-medium tracking-tight text-ink transition-all duration-300 hover:shadow-md"
            >
              <span>How It Works</span>
              <Arrow className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Subtle executive trust assurances */}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.72rem] text-muted animate-fade [animation-delay:460ms]">
            <div className="flex items-center gap-1.5 font-medium">
              <span className="size-1.5 rounded-full bg-ink" />
              <span>Complimentary Evaluation</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <span className="size-1.5 rounded-full bg-ink" />
              <span>Personalized Snapshot</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <span className="size-1.5 rounded-full bg-ink" />
              <span>Private &amp; Confidential</span>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Executive Dossier & VIBE™ Framework Matrix */}
        <div aria-hidden="true" className="lg:col-span-5 xl:col-span-5">
          <div data-parallax="18" className="relative mx-auto max-w-md animate-fade [animation-delay:320ms] lg:ml-auto">

            {/* Bespoke Executive Dossier Card */}
            <div
              data-spotlight
              className="relative overflow-hidden rounded-3xl border border-line-strong bg-paper p-6 transition-colors duration-500 hover:border-ink/40 sm:p-7"
            >
              {/* Precision corner marks hugging card borders */}
              <Corner className="pointer-events-none absolute -right-px -top-px size-6 text-ink/40" />
              <Corner flip className="pointer-events-none absolute -bottom-px -left-px size-6 text-ink/40" />

              {/* Dossier Header */}
              <div className="flex items-center justify-between pb-2">
                <span className="luxury-pill text-[0.65rem] tracking-[0.2em] font-medium uppercase">
                  LQ™ Evaluation Dossier
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] tracking-wider text-muted uppercase">
                  <span className="size-1.5 rounded-full bg-ink animate-pulse" />
                  Framework
                </span>
              </div>

              {/* Dossier Title */}
              <div className="mt-3">
                <p className="serif-accent text-2xl sm:text-3xl text-ink leading-tight font-normal">
                  Discover Where You Stand
                </p>
                <p className="mt-1 text-[0.68rem] text-muted tracking-[0.18em] uppercase font-mono font-medium">
                  Personal Brand Architecture™
                </p>
              </div>

              {/* Hairline Divider */}
              <div className="my-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-line-strong to-transparent" />
                <span className="size-1 rounded-full bg-ink/30" />
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-line-strong to-transparent" />
              </div>

              {/* The 4 VIBE™ Dimensions Showcase */}
              <div className="space-y-2">
                <div className="flex items-center justify-between px-1 pb-1 text-[0.65rem] font-mono uppercase tracking-[0.2em] text-muted">
                  <span>Evaluation Dimensions</span>
                  <span>V • I • B • E</span>
                </div>

                <ol className="divide-y divide-line/40 rounded-2xl border border-line bg-paper overflow-hidden">
                  {VIBE_PILLARS.map((p, i) => (
                    <li
                      key={p.letter}
                      className="group flex items-center justify-between px-4 py-3 transition-colors duration-300 "
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-line-strong bg-paper font-mono text-[0.7rem] font-semibold text-ink shadow-2xs group-hover:border-ink/40 group-hover:bg-ink group-hover:text-paper transition-all duration-300">
                          0{i + 1}
                        </span>
                        <div>
                          <span className="block text-sm sm:text-[0.925rem] font-medium tracking-tight text-ink group-hover:translate-x-0.5 transition-transform duration-300">
                            {p.name}
                          </span>
                          <span className="text-[0.7rem] text-muted block">
                            {p.focus}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="serif-accent text-2xl text-ink/75 group-hover:scale-110 group-hover:text-ink transition-all duration-300">
                          {p.letter}
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Dossier Card Footer */}
              <div className="mt-4 pt-3.5 border-t border-line/60 flex items-center justify-between text-[0.7rem]">
                <span className="flex items-center gap-2 text-muted">
                  <span className="size-1.5 rounded-full bg-ink" />
                  <span>Executive Snapshot Ready</span>
                </span>
                <span className="font-mono text-[0.65rem] uppercase tracking-wider text-ink/80 font-medium">
                  ~3 Min Assessment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom subtle anchor band */}
      <div className="container-x border-t border-line/50 py-4 flex items-center justify-between text-xs text-muted">
        <div className="flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.2em] font-medium text-ink/70">
          <span className="hidden sm:inline">Architectural Brand Advisory</span>
          <span aria-hidden="true" className="hidden sm:inline text-line-strong">•</span>
          <span>Level141 Private Practice</span>
        </div>
      </div>
    </section>
  );
}
