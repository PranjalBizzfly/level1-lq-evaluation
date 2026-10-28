import { AUDIENCES } from "@/content/lq";
import { Accent, Corner, Section, SectionHead, delay } from "@/components/ui";

// SECTION 7 — WHO IS IT FOR?
export default function WhoItsFor() {
  return (
    <Section id="who-is-it-for" labelledBy="who-title" className="border-t border-line">
      <SectionHead n={7}>Who Is It For?</SectionHead>

      <div data-reveal className="mt-8">
        <h2 id="who-title" className="headline max-w-5xl text-[2.5rem] leading-[1.08] sm:text-5xl lg:text-[4rem]">
          <span className="block">For Leaders Who Have Achieved</span> <Accent>And Still Have More to Accomplish</Accent>
        </h2>
        <div className="mt-12 sm:mt-16 flex items-center justify-between pb-6 border-b border-line">
          <p className="eyebrow text-ink/80">The LQ™ Evaluation is designed for:</p>
          <span className="text-xs font-mono text-muted tracking-widest uppercase hidden sm:inline-block">
            Target Leadership Cohorts
          </span>
        </div>
      </div>

      {/* Structured Executive Leadership Profiles Grid */}
      <ul className="mt-10 sm:mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:gap-12">
        {AUDIENCES.map((a, i) => (
          <li
            key={a.title}
            data-reveal
            style={delay(i, 60)}
            data-spotlight
            className={`surface card-interactive group relative rounded-3xl border border-line p-8 sm:p-12 lg:p-14 flex flex-col justify-between transition-all duration-300 hover:border-ink/50 shadow-sm ${
              i === 0 ? "lg:col-span-2" : ""
            }`}
          >
            {i === 0 && (
              <Corner className="absolute -top-px -right-px size-8 text-ink/70 sm:size-10" />
            )}

            <div>
              <div className="flex items-center justify-between border-b border-line pb-6">
                <span className="luxury-pill">
                  Cohort 0{i + 1}
                </span>
              </div>

              <h3 className="headline mt-8 text-2xl sm:text-3xl lg:text-4xl text-ink font-light leading-snug group-hover:translate-x-1.5 transition-transform duration-300">
                {a.title}
              </h3>
            </div>

            <div className="mt-10 pt-6 border-t border-line/60">
              <p className="text-base sm:text-lg leading-[1.85] text-muted group-hover:text-ink transition-colors duration-300">
                {a.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
