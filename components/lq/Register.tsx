import RegistrationForm from "@/components/RegistrationForm";
import { Accent, Eyebrow, Section } from "@/components/ui";

// EVALUATION REGISTRATION FORM
export default function Register() {
  return (
    <Section id="register" labelledBy="register-title">
      <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-10">
        <div data-reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>Evaluation Registration</Eyebrow>
            <h2 id="register-title" className="headline mt-6 text-[2.25rem] sm:text-5xl">
              Discover Your <Accent>Level Quotient™</Accent>
            </h2>
            <p className="mt-6 text-lg font-medium">Let&apos;s begin with a few details.</p>
            <ul className="mt-8 hidden flex-col gap-2 text-sm text-muted lg:flex">
              <li className="serif-accent text-base">Complimentary</li>
              <li className="serif-accent text-base">Private &amp; Confidential</li>
            </ul>
          </div>
        </div>
        <div data-reveal className="border border-line-strong bg-paper p-6 sm:p-10 lg:col-span-8 lg:p-14">
          <RegistrationForm />
        </div>
      </div>
    </Section>
  );
}
