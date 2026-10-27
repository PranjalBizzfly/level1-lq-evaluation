import { AUDIENCES } from "@/content/lq";
import { Accent, Section, SectionHead, delay } from "@/components/ui";

// SECTION 7 — WHO IS IT FOR?
export default function WhoItsFor() {
  return (
    <Section id="who-is-it-for" labelledBy="who-title" className="border-t border-line">
      <SectionHead n={7}>Who Is It For?</SectionHead>

      <div data-reveal className="mt-20 lg:mt-32">
        <h2 id="who-title" className="headline max-w-5xl text-[2.25rem] sm:text-5xl lg:text-[3.75rem]">
          <span className="block">For Leaders Who Have Achieved</span> <Accent>And Still Have More to Accomplish</Accent>
        </h2>
        <p className="eyebrow mt-10">The LQ™ Evaluation is designed for:</p>
      </div>

      {/* Index list: large titles, descriptions aligned to a right column. */}
      <ul className="mt-8 border-t border-line-strong">
        {AUDIENCES.map((a, i) => (
          <li
            key={a.title}
            data-reveal
            style={delay(i, 60)}
            className="group grid gap-3 border-b border-line-strong py-10 sm:grid-cols-[4rem_1fr] lg:grid-cols-12 lg:items-center lg:gap-x-10 lg:py-14"
          >
            <span aria-hidden="true" className="eyebrow tabular-nums lg:col-span-2">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="headline text-3xl transition-transform duration-500 group-hover:translate-x-3 sm:text-4xl lg:col-span-6 lg:text-5xl">
              {a.title}
            </h3>
            <p className="text-lg leading-[1.85] sm:col-start-2 lg:col-span-4 lg:col-start-9">{a.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
