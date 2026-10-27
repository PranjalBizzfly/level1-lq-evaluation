import { PRIMARY_NAV } from "@/lib/site";
import { Arrow, Corner, Cta, Logo } from "@/components/ui";

// Standalone footer; every link stays on this page.
export default function SiteFooter() {
  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>
      <div className="relative overflow-hidden border-t border-line bg-paper text-ink">
                        <div className="container-x relative pb-8 pt-16 sm:pb-10 sm:pt-20 lg:pt-28">
          <Corner className="absolute right-5 top-8 size-6 text-ink sm:right-8 sm:top-10 lg:right-14" />
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Logo className="h-5 w-auto" />
              <p className="eyebrow mt-4 text-ink">Personal Brand Architecture™</p>
              <p className="headline mt-10 text-[2.25rem] sm:text-5xl lg:text-[3.5rem]">
                <span className="block">Your Next Level</span> <span className="serif-accent">Architected</span>
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:items-end">
              <Cta label="Discover My LQ™ →" href="#register" />
              <p className="text-sm text-ink lg:text-right">
                Level141 — Growth By Design.
                <br />
                Part of the 1XL ecosystem, headquartered in Dubai.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-10 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="max-w-xs text-lg font-light leading-snug tracking-[-0.01em] text-ink">
                Growth Architecture For <span className="serif-accent">People &amp; Organizations</span>
              </p>
            </div>
            <nav aria-label="Footer" className="lg:col-span-8">
              <p className="eyebrow text-ink">On This Page</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {PRIMARY_NAV.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="inline-block text-sm text-ink hover:text-ink">
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#register" className="inline-block text-sm text-ink hover:text-ink">
                    Evaluation Registration
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-xs text-ink sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Level141. All rights reserved.</p>
            <a href="#top" className="group inline-flex items-center gap-2 hover:text-ink">
              Back to top
              <Arrow className="-rotate-90 group-hover:translate-x-0 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
