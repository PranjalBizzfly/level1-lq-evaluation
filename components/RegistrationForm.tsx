"use client";

import { useRef, useState, type FormEvent } from "react";
import { GOALS, validateLq, type LqErrors, type LqFields } from "@/lib/lq-form";
import { BTN, BTN_ON_LIGHT } from "@/components/ui";

const EMPTY: LqFields = { fullName: "", title: "", company: "", email: "", mobile: "", linkedin: "", goal: "" };

type TextField = {
  name: Exclude<keyof LqFields, "goal">;
  label: string;
  required?: boolean;
  type: string;
  autoComplete: string;
  inputMode?: "email" | "tel" | "url";
};

const TEXT_FIELDS: TextField[] = [
  { name: "fullName", label: "Full Name", required: true, type: "text", autoComplete: "name" },
  { name: "title", label: "Professional Title", required: true, type: "text", autoComplete: "organization-title" },
  { name: "company", label: "Company / Organization", required: true, type: "text", autoComplete: "organization" },
  { name: "email", label: "Email Address", required: true, type: "email", autoComplete: "email", inputMode: "email" },
  { name: "mobile", label: "Mobile Number", type: "tel", autoComplete: "tel", inputMode: "tel" },
  { name: "linkedin", label: "LinkedIn Profile URL", type: "url", autoComplete: "url", inputMode: "url" },
];

type Status = { state: "idle" | "submitting" | "success" } | { state: "error"; message: string };

export default function RegistrationForm() {
  const [values, setValues] = useState<LqFields>(EMPTY);
  const [errors, setErrors] = useState<LqErrors>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  const set = (name: keyof LqFields, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const onBlur = (name: keyof LqFields) => {
    const err = validateLq(values)[name];
    setErrors((e) => ({ ...e, [name]: err }));
  };

  const focusFirstInvalid = (found: LqErrors) => {
    const first = Object.keys(found)[0];
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
    return Boolean(first);
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validateLq(values);
    setErrors(found);
    if (focusFirstInvalid(found)) return;

    setStatus({ state: "submitting" });
    const honeypot = (formRef.current?.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "";
    try {
      const res = await fetch("/api/lq-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honeypot }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus({ state: "success" });
        setValues(EMPTY);
      } else if (res.status === 422 && data.errors) {
        setErrors(data.errors);
        setStatus({ state: "idle" });
        requestAnimationFrame(() => focusFirstInvalid(data.errors));
        return;
      } else {
        setStatus({ state: "error", message: data.error ?? "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({
        state: "error",
        message: "We couldn't reach the server. Please check your connection and try again.",
      });
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  if (status.state === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="border border-line-strong p-8 text-center sm:p-14">
        <span aria-hidden="true" className="mx-auto grid size-14 place-items-center border border-line-strong text-2xl">
          ✓
        </span>
        <p className="eyebrow mt-8">Received</p>
        <p className="headline serif-accent mt-4 text-5xl sm:text-6xl">Thank you</p>
        <p className="mx-auto mt-5 max-w-md">Your details have been submitted.</p>
      </div>
    );
  }

  const submitting = status.state === "submitting";
  const found = validateLq(values);
  const isDone = (name: keyof LqFields) => Boolean(values[name]) && !found[name];

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-describedby="privacy-note" className="space-y-12">
      {status.state === "error" && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          className="flex items-start gap-3 border-l-2 border-error py-2 pl-5 text-sm font-medium text-error"
        >
          <ErrorMark />
          <span>{status.message}</span>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        {TEXT_FIELDS.map((f) => {
          const err = errors[f.name];
          const id = `lq-${f.name}`;
          const ok = isDone(f.name) && !err;
          return (
            <div key={f.name}>
              {/* Underlined field: the label floats above as you type; the line darkens on focus. */}
              <div
                className={`relative border-b transition-colors duration-500 focus-within:border-ink ${
                  err ? "border-error" : ok ? "border-line-strong" : "border-line hover:border-line-strong"
                }`}
              >
                <input
                  id={id}
                  name={f.name}
                  type={f.type}
                  inputMode={f.inputMode}
                  autoComplete={f.autoComplete}
                  required={f.required}
                  aria-required={f.required || undefined}
                  aria-invalid={err ? true : undefined}
                  aria-describedby={err ? `${id}-error` : undefined}
                  value={values[f.name]}
                  onChange={(e) => set(f.name, e.target.value)}
                  onBlur={() => onBlur(f.name)}
                  maxLength={500}
                  placeholder=" "
                  className="peer block min-h-16 w-full bg-transparent px-0 pb-2.5 pt-7 pr-10 text-base outline-none focus-visible:outline-none"
                />
                <label
                  htmlFor={id}
                  className="pointer-events-none absolute left-0 top-5 origin-left text-sm text-muted transition-all duration-300 peer-focus:top-2.5 peer-focus:text-[0.68rem] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-ink peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-[0.68rem] peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.18em]"
                >
                  {f.label}
                  {f.required && (
                    <span aria-hidden="true" className="text-ink">
                      {" "}
                      *
                    </span>
                  )}
                </label>
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-sm text-ink transition-all duration-300 ${
                    ok ? "scale-100 opacity-100" : "scale-50 opacity-0"
                  }`}
                >
                  ✓
                </span>
              </div>
              {err && (
                <p id={`${id}-error`} className="mt-2 flex items-center gap-2 px-1 text-sm font-medium text-error">
                  <ErrorMark />
                  {err}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <fieldset aria-describedby={errors.goal ? "lq-goal-error" : undefined} className="pt-8">
        <legend className="headline text-2xl sm:text-3xl text-ink font-light leading-snug">
          What would you most like to achieve through your personal brand?
        </legend>
        <p className="mt-3 text-sm sm:text-base text-muted">Select your primary goal:</p>

        {/* Goal selection cards */}
        <div className="mt-8 border-t border-line">
          {GOALS.map((g, i) => {
            const id = `lq-goal-${i}`;
            const selected = values.goal === g;
            return (
              <label
                key={g}
                htmlFor={id}
                className={`group/goal flex min-h-16 cursor-pointer items-center gap-5 border-b border-line py-4 text-base leading-snug transition-colors duration-500 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-ink ${
                  selected ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                <input
                  id={id}
                  type="radio"
                  name="goal"
                  value={g}
                  checked={selected}
                  onChange={() => set("goal", g)}
                  className="sr-only"
                />
                <span
                  aria-hidden="true"
                  className={`grid size-4 shrink-0 place-items-center rounded-full border transition-colors duration-500 ${
                    selected ? "border-ink" : "border-line-strong group-hover/goal:border-ink"
                  }`}
                >
                  <span
                    className={`size-2 rounded-full bg-ink transition-transform duration-500 ${selected ? "scale-100" : "scale-0"}`}
                  />
                </span>
                <span className="flex-1">{g}</span>
              </label>
            );
          })}
        </div>
        {errors.goal && (
          <p id="lq-goal-error" className="mt-3 flex items-center gap-2 px-1 text-sm font-medium text-error">
            <ErrorMark />
            {errors.goal}
          </p>
        )}
      </fieldset>

      {/* Honeypot, hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="lq-website">Website</label>
        <input id="lq-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-6 border-t border-line pt-10">
        <button
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
          data-magnetic
          className={`${BTN} ${BTN_ON_LIGHT} inline-flex min-h-14 w-full px-8 text-base shadow-lg hover:shadow-xl disabled:cursor-wait disabled:opacity-60`}
        >
          <span>{submitting ? "Submitting…" : "Begin My Evaluation"}</span>
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
        <p id="privacy-note" className="text-center text-xs italic leading-[1.85] text-muted">
          Your information will be used to provide your evaluation and related communications in accordance with our
          privacy policy. You may opt out of marketing communications at any time.
        </p>
      </div>
    </form>
  );
}

function ErrorMark() {
  return (
    <span
      aria-hidden="true"
      className="grid size-4 shrink-0 place-items-center rounded-full border border-current text-[0.6rem] font-bold"
    >
      !
    </span>
  );
}
