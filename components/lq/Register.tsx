import RegistrationForm from "@/components/RegistrationForm";
import { Accent, Eyebrow, Section } from "@/components/ui";

// EVALUATION REGISTRATION FORM
export default function Register() {
  return (
    <Section id="register" labelledBy="register-title" className="border-t border-line">
      <div className="grid items-start gap-y-16 lg:grid-cols-12 lg:gap-x-16 xl:gap-x-20">
        <div data-reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Eyebrow>Evaluation Registration</Eyebrow>
            <h2
              id="register-title"
              className="headline mt-10 text-[2.5rem] leading-[1.08] sm:text-5xl lg:text-[4.25rem] xl:text-[5.25rem]"
            >
              Discover Your <Accent>Level Quotient™</Accent>
            </h2>
            <p className="mt-8 text-lg text-muted">Let&apos;s begin with a few details.</p>
            <ul className="mt-12 space-y-3 border-t border-line pt-8">
              <li className="serif-accent text-xl">Complimentary</li>
              <li className="serif-accent text-xl">Private &amp; Confidential</li>
            </ul>
          </div>
        </div>

        {/* Open form on the page, framed only by a hairline. */}
        <div data-reveal className="border-t border-line-strong pt-10 lg:col-span-7 lg:pt-12">
          <RegistrationForm />
        </div>
      </div>
    </Section>
  );
}
