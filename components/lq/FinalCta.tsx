import { Accent, Cta } from "@/components/ui";
import PhotoBand from "@/components/lq/PhotoBand";
import keynote from "@/public/images/keynote.png";

// SECTION 10 — FINAL CTA
export default function FinalCta() {
  return (
    <section id="final-cta" aria-labelledby="final-title" className="relative border-t border-line bg-paper text-ink">
      {/* The closing message stands on the keynote image: "how you're perceived", in front of an audience. */}
      <div>
        <PhotoBand
          src={keynote}
          alt="A speaker addressing a full auditorium"
          className="min-h-[100svh]"
          sizes="100vw"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-white/80">Discover your Level Quotient™ today</p>
            <h2 id="final-title" className="headline mt-8 text-[2.5rem] leading-[1.08] sm:text-5xl lg:text-[4.25rem] xl:text-[5.25rem]">
              <span className="block">You Know What You&apos;ve Achieved</span>{" "}
              <Accent>Discover How You&apos;re Perceived</Accent>
            </h2>
            <div className="mx-auto mt-10 max-w-xl space-y-2 text-lg leading-[1.8]">
              <p>Your experience has value.</p>
              <p>Your reputation has influence.</p>
              <p className="text-white/75">Your next opportunity may depend on how well the world understands both.</p>
            </div>
            <div className="mt-12 flex flex-col items-center gap-5">
              <Cta label="Discover My LQ™ →" className="!bg-white !text-black hover:!bg-white/90" />
              <p className="text-sm text-white/75">Complimentary | Private &amp; Confidential</p>
            </div>
          </div>
        </PhotoBand>
      </div>
    </section>
  );
}
