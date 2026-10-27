import { Arrow, Corner, Cta } from "@/components/ui";

/** Decorative line drawing: nested squares stepping upward, echoing "levels" and the corner mark. */
function LevelLines() {
  const steps = [0, 1, 2, 3, 4];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 1000"
      fill="none"
      className="pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden h-full w-auto -translate-x-1/2 -translate-y-1/2 animate-fade text-line [animation-duration:2.4s] [mask-image:radial-gradient(closest-side,transparent_55%,black)] sm:block"
    >
      {steps.map((i) => {
        const size = 420 + i * 140;
        const o = (1000 - size) / 2;
        // Each square rises slightly more than the last, like successive levels.
        return <rect key={i} x={o} y={o - i * 18} width={size} height={size} stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />;
      })}
    </svg>
  );
}

// SECTION 1 — HERO
export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-paper text-ink"
    >
      <div className="container-x flex flex-1 flex-col pt-24 sm:pt-28">
        <p className="eyebrow animate-fade text-center">The Level Quotient™ Evaluation</p>

        {/* Centre stage: headline, key line and actions. */}
        <div className="relative flex flex-1 flex-col items-center justify-center py-14 text-center sm:py-16">
          <LevelLines />
          <Corner className="mb-10 size-6 animate-fade text-ink sm:size-7" />
          <h1
            id="hero-title"
            className="headline max-w-5xl text-[2.6rem] min-[400px]:text-[2.9rem] sm:text-6xl lg:text-[4.75rem] xl:text-[5.5rem]"
          >
            <span className="serif-accent block animate-rise [animation-delay:60ms]">You&apos;ve Built Your Success</span>
            <span className="block animate-rise [animation-delay:180ms]">Does Your Personal Brand Reflect It?</span>
          </h1>

          <div className="mt-10 max-w-2xl animate-rise space-y-3 text-lg leading-[1.75] [animation-delay:300ms] sm:text-xl">
            <p className="font-medium">Your achievements speak for themselves.</p>
            <p>But does your personal reputation truly reflect your experience, influence and ambitions?</p>
          </div>

          <div className="mt-12 flex w-full animate-rise flex-col items-center gap-6 [animation-delay:420ms] sm:w-auto sm:flex-row sm:gap-10">
            <Cta label="Discover My LQ™ →" className="w-full sm:w-auto" />
            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-3 border-b border-line-strong pb-1 text-[0.78rem] font-medium uppercase tracking-[0.16em] hover:border-ink"
            >
              How It Works
              <Arrow />
            </a>
          </div>
        </div>
      </div>

      {/* Lower band: the rest of the opening copy, assurances and a quiet scroll cue. */}
      <div className="border-t border-line">
        <div className="container-x grid gap-8 py-8 text-[0.95rem] leading-[1.75] sm:py-10 lg:grid-cols-12 lg:items-start lg:gap-x-10">
          <p className="lg:col-span-4">
            Discover where your personal brand stands today with the{" "}
            <strong className="font-semibold">complimentary LQ™ Snapshot</strong>.
          </p>
          <p className="lg:col-span-4">
            Understand your strengths, identify potential gaps and discover opportunities to strengthen your professional
            reputation.
          </p>
          <ul className="flex flex-col gap-1.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] lg:col-span-3 lg:col-start-10 lg:items-end lg:text-right">
            <li>Complimentary Evaluation</li>
            <li>Personalized Snapshot</li>
            <li>Private &amp; Confidential</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
