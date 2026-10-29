import { Cta, Logo } from "@/components/ui";

// Footer mirroring the live Level141 site; every link stays on this standalone page.
const COLUMNS = [
  {
    title: "Explore",
    links: [
      { href: "#introducing-lq", label: "About LQ™" },
      { href: "#what-you-receive", label: "What You Receive" },
      { href: "#who-is-it-for", label: "Who It's For" },
      { href: "#how-it-works", label: "How It Works" },
      { href: "#the-bigger-picture", label: "Engagements" },
    ],
  },
  {
    title: "Frameworks",
    links: [
      { href: "#introducing-lq", label: "LQ™", sub: "Level Quotient" },
      { href: "#vibe", label: "VIBE™", sub: "Vision, Impact, Business Growth, Evolution" },
    ],
  },
  {
    title: "Start Your Next Level",
    links: [{ href: "#register", label: "Evaluation Registration" }],
  },
];

export default function SiteFooter() {
  return (
    <footer aria-labelledby="footer-heading" className="relative isolate overflow-hidden bg-paper">
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      <div data-reveal className="relative border-t border-line-strong">
        <div className="container-x relative pb-10 pt-20 lg:pt-28">
          {/* Statement and call to action. */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <p className="headline text-[2.15rem] leading-[1.03] sm:text-5xl lg:col-span-8 lg:text-[3.6rem]">
              Growth Architecture For <span className="serif-accent">People &amp; Organizations</span>
            </p>
            <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:items-end">
              <Cta label="Discover My LQ™ →" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Level141 — Growth By Design.
              </p>
            </div>
          </div>

          {/* Divider held between two corner marks; the line draws in on reveal. */}
          <div aria-hidden="true" className="mt-12 flex items-center gap-4 sm:mt-14">
            <span className="rule-draw h-px flex-1 bg-line" />
          </div>

          <div className="mt-12 grid gap-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-12 lg:gap-8">
            <div className="sm:col-span-2 lg:col-span-3">
              <a href="#top" aria-label="Level141 — Back to top" className="inline-flex min-h-11 items-center">
                <Logo className="h-5 w-auto" />
              </a>
              <p className="mt-5 max-w-xs leading-relaxed text-muted">
                Part of the 1XL ecosystem, headquartered in Dubai.
              </p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-ink" />
                Dubai
              </p>
            </div>

            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title} className="lg:col-span-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{col.title}</p>
                <ul className="mt-4">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="group flex min-h-11 flex-col justify-center py-1.5 text-[1.02rem] leading-snug"
                      >
                        {/* Underline grows from the left on hover, as on the live site. */}
                        <span className="w-fit bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 ease-[var(--ease-architect)] group-hover:bg-[length:100%_1px]">
                          {l.label}
                        </span>
                        {"sub" in l && l.sub && <span className="mt-0.5 text-sm text-muted">{l.sub}</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Oversized, faint wordmark: the complete official logo, scaled, never cropped or altered. */}
          <div aria-hidden="true" data-reveal className="mt-16 lg:mt-24">
            <Logo className="h-auto w-full opacity-[0.07]" />
          </div>

          <div className="mt-10 border-t border-line pt-6 text-sm text-muted">
            <p>© {new Date().getFullYear()} Level141. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
