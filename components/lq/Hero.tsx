import Image from "next/image";
import { Cta } from "@/components/ui";
import heroSkyline from "@/public/images/hero-skyline.png";

// SECTION 1 — HERO
// Full-bleed cinematic opening: the photograph fills the screen, the statement sits low on the left.
export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-black text-white"
    >
      <Image
        src={heroSkyline}
        alt="An executive looking out over the Dubai skyline from a high-rise office"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="hero-settle -z-20 object-cover object-[60%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/50 to-black/30"
      />

      {/* Top labels, as on an editorial cover. */}
      <div className="container-x flex items-start justify-between gap-6 pt-28 text-xs uppercase tracking-[0.2em] text-white/75 sm:pt-32">
        <p className="animate-fade">The Level Quotient™ Evaluation</p>
        <p className="hidden animate-fade sm:block">Complimentary · Private &amp; Confidential</p>
      </div>

      <div className="container-x mt-auto pb-16 pt-24 sm:pb-20 lg:pb-24">
        <h1
          id="hero-title"
          className="headline max-w-4xl text-[2.6rem] leading-[1.04] min-[400px]:text-[3rem] sm:text-6xl lg:text-[4.5rem] xl:text-[5.25rem]"
        >
          <span className="serif-accent block">You&apos;ve Built Your Success</span>
          <span className="block">Does Your Personal Brand Reflect It?</span>
        </h1>

        <div className="mt-10 grid animate-rise gap-10 [animation-delay:320ms] lg:mt-14 lg:grid-cols-12 lg:items-end lg:gap-x-16">
          <div className="photo-band max-w-xl space-y-4 text-lg leading-[1.75] text-white/80 lg:col-span-6">
            <p className="text-xl text-white">Your achievements speak for themselves.</p>
            <p>But does your personal reputation truly reflect your experience, influence and ambitions?</p>
            <p>
              Discover where your personal brand stands today with the{" "}
              <strong className="font-semibold !text-white">complimentary LQ™ Snapshot</strong>.
            </p>
            <p className="text-base">
              Understand your strengths, identify potential gaps and discover opportunities to strengthen your
              professional reputation.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:col-span-6 lg:justify-end">
            <Cta label="Discover My LQ™ →" className="!bg-white !text-black hover:!bg-white/90" />
            <a
              href="#the-real-question"
              className="group inline-flex min-h-12 items-center gap-3 border-b border-white/40 pb-1 text-sm text-white hover:border-white"
            >
              Continue
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                className="nudge size-4"
                aria-hidden="true"
              >
                <path d="M12 5v14M6 13l6 6 6-6" />
              </svg>
            </a>
          </div>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-2 border-t border-white/20 pt-6 text-sm text-white/70">
          <li>Complimentary Evaluation</li>
          <li>Personalized Snapshot</li>
          <li>Private &amp; Confidential</li>
        </ul>
      </div>
    </section>
  );
}
