import RegistrationForm from "@/components/RegistrationForm";
import { STEPS } from "@/content/lq";
import { Accent, Corner, Eyebrow, Section } from "@/components/ui";

// EVALUATION REGISTRATION FORM
export default function Register() {
  return (
    <Section id="register" labelledBy="register-title" className="border-t border-line">
      <div className="grid gap-y-16 lg:grid-cols-12 lg:gap-x-16 xl:gap-x-20 items-start">
        {/* Left Column: Executive Briefing & Steps */}
        <div data-reveal className="lg:col-span-5 xl:col-span-5">
          <div className="lg:sticky lg:top-32 space-y-10">
            <div>
              <Eyebrow>Evaluation Registration</Eyebrow>
              <h2 id="register-title" className="headline mt-6 text-[2.5rem] leading-[1.1] sm:text-5xl text-ink">
                Discover Your <Accent>Level Quotient™</Accent>
              </h2>
              <p className="mt-4 text-lg sm:text-xl font-light text-muted">
                Let&apos;s begin with a few details.
              </p>
            </div>

            {/* What happens next: the three steps from How It Works */}
            <div className="surface rounded-3xl border border-line p-8 sm:p-10 shadow-sm">
              <span className="eyebrow block text-xs text-muted mb-8">Evaluation Process</span>
              <ol aria-label="How It Works" className="space-y-8">
                {STEPS.map((s, i) => (
                  <li key={s.n} className="relative flex items-start gap-5">
                    {i < STEPS.length - 1 && (
                      <span aria-hidden="true" className="absolute left-[1.25rem] top-11 bottom-0 w-px bg-line-strong" />
                    )}
                    <span
                      aria-hidden="true"
                      className="btn-solid relative z-10 grid size-10 shrink-0 place-items-center rounded-xl bg-ink font-mono text-xs font-bold text-paper shadow-xs"
                    >
                      {s.n}
                    </span>
                    <div className="pt-1">
                      <span className="block text-base font-medium text-ink leading-tight">{s.title}</span>
                      <span className="text-xs text-muted mt-1 block">Stage 0{i + 1}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <span className="luxury-pill serif-accent text-sm normal-case tracking-normal">
                Complimentary
              </span>
              <span className="luxury-pill serif-accent text-sm normal-case tracking-normal">
                Private &amp; Confidential
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: High-End Registration Form */}
        <div data-reveal className="surface relative rounded-[2.5rem] border border-line-strong/80 p-8 sm:p-12 lg:col-span-7 xl:col-span-7 lg:p-16 xl:p-20 shadow-2xl backdrop-blur-xl">
          <Corner className="absolute -top-px -right-px size-8 text-ink/70 sm:size-10" />
          <RegistrationForm />
        </div>
      </div>
    </Section>
  );
}
