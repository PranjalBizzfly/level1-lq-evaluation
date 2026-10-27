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
  const done = REQUIRED.filter(isDone).length;

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-describedby="privacy-note" className="space-y-16">
      {status.state === "error" && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          className="flex items-start gap-3 border-2 border-error bg-paper px-5 py-4 text-sm font-medium text-error"
        >
          <ErrorMark />
          <span>{status.message}</span>
        </div>
      )}

      {/* Progress: required fields completed so far. */}
      <div>
        <div className="flex items-baseline justify-between gap-6">
          <p className="text-xs">
            Fields marked <span aria-hidden="true">*</span>
            <span className="sr-only">with an asterisk</span> are required.
          </p>
          <p className="eyebrow tabular-nums" aria-live="polite">
            {done} / {REQUIRED.length}
            <span className="sr-only"> required fields complete</span>
          </p>
        </div>
        <div aria-hidden="true" className="mt-4 h-px bg-line-strong">
          <div
            className="h-px origin-left bg-ink transition-transform duration-700 ease-[var(--ease-architect)]"
            style={{ transform: `scaleX(${done / REQUIRED.length})` }}
          />
        </div>
      </div>

      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
        {TEXT_FIELDS.map((f) => {
          const err = errors[f.name];
          const id = `lq-${f.name}`;
          const ok = isDone(f.name) && !err;
          return (
            <div key={f.name}>
              <div className="relative pt-6">
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
                  className={`peer block min-h-12 w-full border-0 border-b bg-transparent py-2 pr-8 text-lg outline-none focus-visible:outline-none ${
                    err ? "border-b-2 border-error" : "border-line-strong"
                  }`}
                />
                {/* Floating label: sits in the field, lifts on focus or once filled. */}
                <label
                  htmlFor={id}
                  className="pointer-events-none absolute left-0 top-8 origin-left text-lg transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.7rem] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-[0.2em] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.2em]"
                >
                  {f.label}
                  {f.required && <span aria-hidden="true"> *</span>}
                </label>
                {/* Underline that draws across while the field has focus. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-ink transition-transform duration-500 peer-focus:scale-x-100"
                />
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute bottom-3 right-0 text-sm transition-opacity duration-300 ${ok ? "opacity-100" : "opacity-0"}`}
                >
                  ✓
                </span>
              </div>
              {err && (
                <p id={`${id}-error`} className="mt-3 flex items-center gap-2 text-sm font-medium text-error">
                  <ErrorMark />
                  {err}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <fieldset aria-describedby={errors.goal ? "lq-goal-error" : undefined}>
        <legend className="headline text-2xl sm:text-3xl">
          What would you most like to achieve through your personal brand?
        </legend>
        <p className="mt-3 text-sm">Select your primary goal:</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {GOALS.map((g, i) => {
            const id = `lq-goal-${i}`;
            return (
              <label
                key={g}
                htmlFor={id}
                className="group/goal flex min-h-16 cursor-pointer items-center gap-4 border border-line-strong px-5 py-4 text-[0.95rem] transition-all duration-300 hover:-translate-y-0.5 hover:border-ink has-checked:border-ink has-checked:font-medium has-checked:shadow-[inset_0_0_0_1px_var(--color-ink)] has-focus-visible:outline-2 has-focus-visible:outline-offset-3 has-focus-visible:outline-ink"
              >
                <input
                  id={id}
                  type="radio"
                  name="goal"
                  value={g}
                  checked={values.goal === g}
                  onChange={() => set("goal", g)}
                  className="sr-only"
                />
                <span aria-hidden="true" className="eyebrow w-6 shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">{g}</span>
                <span
                  aria-hidden="true"
                  className="grid size-5 shrink-0 place-items-center border border-current text-[0.7rem] transition-transform duration-300 group-has-checked/goal:scale-110"
                >
                  <span className="opacity-0 transition-opacity duration-300 group-has-checked/goal:opacity-100">
                    ✓
                  </span>
                </span>
              </label>
            );
          })}
        </div>
        {errors.goal && (
          <p id="lq-goal-error" className="mt-3 flex items-center gap-2 text-sm font-medium text-error">
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

      <div className="flex flex-col gap-8 border-t border-line pt-10">
        <button
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
          className={`${BTN} ${BTN_ON_LIGHT} inline-flex min-h-16 w-full px-8 disabled:cursor-wait disabled:opacity-60`}
        >
          <span>{submitting ? "Submitting…" : "Begin My Evaluation"}</span>
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
        <p id="privacy-note" className="text-center text-xs italic leading-[1.85]">
          Your information will be used to provide your evaluation and related communications in accordance with our
          privacy policy. You may opt out of marketing communications at any time.
        </p>
      </div>
    </form>
  );
}

const REQUIRED: (keyof LqFields)[] = ["fullName", "title", "company", "email", "goal"];

function ErrorMark() {
  return (
    <span
      aria-hidden="true"
      className="grid size-4 shrink-0 place-items-center border border-current text-[0.6rem] font-bold"
    >
      !
    </span>
  );
}
