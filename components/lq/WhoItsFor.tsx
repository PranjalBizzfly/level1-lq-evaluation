import { AUDIENCES } from "@/content/lq";
import { Accent, Section, SectionHead, delay } from "@/components/ui";
import Photo from "@/components/lq/Photo";
import mentorship from "@/public/images/mentorship.png";

// SECTION 7 — WHO IS IT FOR?
export default function WhoItsFor() {
  return (
    <Section id="who-is-it-for" labelledBy="who-title" className="border-t border-line">
      <div className="grid gap-y-14 lg:grid-cols-12 lg:gap-x-16">
        {/* Heading stays in view while the audiences scroll past. */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHead n={7}>Who Is It For?</SectionHead>
            <h2
              id="who-title"
              data-reveal
              className="headline mt-10 text-[2.5rem] leading-[1.08] sm:text-5xl lg:text-[4.25rem] xl:text-[5.25rem]"
            >
              <span className="block">For Leaders Who Have Achieved</span>{" "}
              <Accent>And Still Have More to Accomplish</Accent>
            </h2>
            <p data-reveal className="mt-8 text-lg text-muted">
              The LQ™ Evaluation is designed for:
            </p>
            <div data-reveal className="mt-12">
              <Photo
                src={mentorship}
                alt="Three leaders in conversation in a modern lounge"
                aspect="aspect-[4/3]"
                sizes="(min-width: 1024px) 34vw, 100vw"
              />
            </div>
          </div>
        </div>

        <ul className="border-t border-line lg:col-span-7">
          {AUDIENCES.map((a, i) => (
            <li
              key={a.title}
              data-reveal
              style={delay(i, 60)}
              className="group grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-10 sm:grid-cols-[4rem_1fr] sm:py-12"
            >
              <span
                aria-hidden="true"
                className="pt-2 text-sm tabular-nums text-muted transition-colors duration-300 group-hover:text-ink"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-2xl font-light tracking-[-0.02em] sm:text-[1.75rem]">{a.title}</h3>
                <p className="mt-3 max-w-lg text-lg leading-[1.8] text-muted">{a.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
