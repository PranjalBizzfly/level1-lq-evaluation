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

        <div className="mt-10 flex animate-rise flex-col items-start gap-10 [animation-delay:320ms] lg:mt-12">
          <p className="text-xl text-white">Your achievements speak for themselves.</p>
          <Cta label="Discover My LQ™ →" className="!bg-white !text-black hover:!bg-white/90" />
        </div>
      </div>
    </section>
  );
}
