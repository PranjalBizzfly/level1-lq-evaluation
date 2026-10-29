import { OFFERS } from "@/content/lq";
import { Accent, Cta, Section, SectionHead, delay } from "@/components/ui";
import PhotoBand from "@/components/lq/PhotoBand";
import horizon from "@/public/images/horizon.png";

// SECTION 9 — THE BIGGER PICTURE
export default function BiggerPicture() {
  return (
    <Section id="the-bigger-picture" labelledBy="bigger-title" className="border-t border-line">
      <SectionHead n={9}>The Bigger Picture</SectionHead>

      {/* The horizon carries the message: starting point, not destination. */}
      <div className="mt-10">
        <PhotoBand
          src={horizon}
          alt="Three leaders looking out toward the horizon at sunrise"
          className="min-h-[28rem] sm:min-h-[36rem] lg:min-h-[40rem]"
          sizes="(min-width: 1440px) 82rem, 100vw"
        >
          <h2
            id="bigger-title"
            className="headline max-w-3xl text-[2.5rem] leading-[1.08] sm:text-5xl lg:text-[4.25rem] xl:text-[5.25rem]"
          >
            <span className="block">Your LQ™ Is Your Starting Point</span> <Accent>Not Your Destination</Accent>
          </h2>
        </PhotoBand>
      </div>

      <div data-reveal className="mt-16 grid gap-y-6 lg:mt-20 lg:grid-cols-12 lg:gap-x-16">
        <p className="serif-accent text-2xl sm:text-3xl lg:col-span-5">What Comes Next Is Your Choice</p>
        <div className="space-y-4 text-lg leading-[1.8] text-muted lg:col-span-7">
          <p>Understanding your current personal brand is the first step.</p>
          <p>
            For those who want to go deeper, Level141 offers a comprehensive assessment and a structured approach to
            personal brand development.
          </p>
        </div>
      </div>

      {/* Progression: the three engagements as successive levels on a single vertical line. */}
      <ol className="relative mt-24 lg:mt-32">
        <span
          aria-hidden="true"
          className="rule-draw absolute bottom-8 left-[0.6875rem] top-3 w-px bg-line-strong lg:left-[calc(25%-0.0625rem)]"
        />
        {OFFERS.map((o, i) => {
          const top = i === OFFERS.length - 1;
          return (
            <li
              key={o.name}
              data-reveal
              style={delay(i, 120)}
              className="relative grid gap-6 pb-20 pl-12 last:pb-0 lg:grid-cols-4 lg:gap-x-16 lg:pb-28 lg:pl-0"
            >
              <div className="lg:pr-12 lg:text-right">
                <p className="eyebrow">{o.tier}</p>
                <p className="mt-3 text-sm tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</p>
              </div>
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1 grid size-6 place-items-center rounded-full border lg:left-[calc(25%-0.75rem)] ${
                  top ? "border-ink bg-ink" : "border-line-strong bg-paper"
                }`}
              >
                <span className={`size-1.5 rounded-full ${top ? "bg-paper" : "bg-ink"}`} />
              </span>
              <div className="max-w-2xl lg:col-span-3 lg:pl-6">
                <h3 className="eyebrow">{o.name}</h3>
                <p className="serif-accent text-ink mt-4 text-3xl leading-tight sm:text-4xl">{o.headline}</p>
                <div className="mt-6 space-y-4 text-lg leading-[1.8] text-muted">
                  {o.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div data-reveal className="mt-20 lg:mt-28">
        <Cta label="Start With My Complimentary LQ™ Evaluation →" />
      </div>
    </Section>
  );
}
