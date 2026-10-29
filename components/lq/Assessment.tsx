"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  BANDS,
  CATEGORIES,
  CONTEXT_QUESTIONS,
  INSTRUCTIONS,
  SCORED,
  calculate,
  isComplete,
  type Answers,
  type LqResult,
} from "@/lib/lq-assessment";
import { Logo } from "@/components/ui";

type Stage = "intro" | "questions" | "calculating" | "report";
const TOTAL = 10;
const EMPTY: Answers = { roles: [], goals: [], scored: {} };

// ASSESSMENT — the LQ Assessment from the Claimed LQ Assessment Guide (dark, editorial band).
export default function Assessment() {
  const [stage, setStage] = useState<Stage>("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(EMPTY);
  const [result, setResult] = useState<LqResult | null>(null);
  const [warn, setWarn] = useState(false);
  const headRef = useRef<HTMLHeadingElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  // Keep keyboard and screen-reader focus on the current question.
  useEffect(() => {
    if (stage !== "intro") headRef.current?.focus({ preventScroll: true });
  }, [stage, step]);

  const scrollTop = () => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const answered = (i: number) => {
    if (i === 0) return answers.roles.length > 0;
    if (i === 1) return answers.goals.length > 0;
    return Boolean(answers.scored[SCORED[i - 2].n]);
  };

  const next = () => {
    if (!answered(step)) return setWarn(true);
    setWarn(false);
    setStep((s) => Math.min(TOTAL - 1, s + 1));
  };
  const prev = () => {
    setWarn(false);
    if (step === 0) setStage("intro");
    else setStep((s) => s - 1);
  };

  const submit = () => {
    if (!isComplete(answers)) {
      setWarn(true);
      const first = [...Array(TOTAL).keys()].find((i) => !answered(i));
      if (first !== undefined) setStep(first);
      return;
    }
    setResult(calculate(answers));
    setStage("calculating");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setTimeout(
      () => {
        setStage("report");
        scrollTop();
      },
      calm ? 0 : 2200,
    );
  };

  const retake = () => {
    setAnswers(EMPTY);
    setResult(null);
    setStep(0);
    setWarn(false);
    setStage("intro");
    scrollTop();
  };

  return (
    <section
      id="assessment"
      aria-labelledby="assessment-title"
      className="relative border-t border-line bg-paper text-ink"
    >
      <div ref={topRef} className="container-x scroll-mt-24 py-24 sm:py-32 lg:py-40">
        <div className="flex items-center justify-between border-b border-line pb-6">
          <Logo className="h-4 w-auto sm:h-5" />
          <span className="text-sm text-muted">LQ™ Assessment</span>
        </div>

        {stage === "intro" && <Intro onStart={() => setStage("questions")} />}

        {stage === "questions" && (
          <div className="mt-16 lg:mt-20">
            <Progress step={step} answers={answers} />
            <QuestionView
              step={step}
              answers={answers}
              setAnswers={setAnswers}
              headRef={headRef}
              onAnswered={() => setWarn(false)}
            />
            {warn && (
              <p role="alert" className="mt-8 border-l-2 border-ink pl-4 text-sm">
                Please choose an answer to continue.
              </p>
            )}
            <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
              <button
                type="button"
                onClick={prev}
                className="min-h-12 text-sm text-muted transition-colors hover:text-ink"
              >
                ← Previous
              </button>
              {step < TOTAL - 1 ? (
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex min-h-12 items-center gap-3 bg-ink px-7 text-sm font-medium text-paper transition-opacity hover:opacity-85"
                >
                  Next <span aria-hidden="true">→</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={submit}
                  className="inline-flex min-h-12 items-center gap-3 bg-ink px-7 text-sm font-medium text-paper transition-opacity hover:opacity-85"
                >
                  Calculate My LQ Score <span aria-hidden="true">→</span>
                </button>
              )}
            </div>
          </div>
        )}

        {stage === "calculating" && (
          <div role="status" aria-live="polite" className="grid min-h-[50vh] place-items-center text-center">
            <div>
              <div className="mx-auto h-px w-48 overflow-hidden bg-ink/15">
                <div className="lq-calc h-px w-1/3 bg-ink" />
              </div>
              <p className="mt-6 text-sm text-muted">Calculating your LQ Score</p>
            </div>
          </div>
        )}

        {stage === "report" && result && <Report r={result} onRetake={retake} headRef={headRef} />}
      </div>
    </section>
  );
}

/* ---------------- Entry screen ---------------- */

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <div className="mt-16 grid gap-16 lg:mt-20 lg:grid-cols-12 lg:gap-x-16">
      <div className="lg:col-span-6">
        <p className="eyebrow text-muted">Level141 · Leadership Quotient</p>
        <h2
          id="assessment-title"
          className="mt-6 text-5xl font-medium tracking-[-0.035em] sm:text-6xl lg:text-[4.5rem] lg:leading-[1.02]"
        >
          LQ Assessment
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-[1.6] text-ink/75">
          A concise assessment of how visible and credible your leadership is to the people who matter: your position,
          your proof, your reach and where you are heading. You receive an LQ Score out of 100, your LQ Level and a
          personal report on what to strengthen first.
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          {["10 questions", "About three minutes", "Change any answer before you submit"].map((t) => (
            <li key={t} className="flex items-center gap-3">
              <span aria-hidden="true" className="size-1.5 bg-ink" />
              {t}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={onStart}
          className="mt-12 inline-flex min-h-14 items-center gap-4 bg-ink px-8 text-sm font-medium text-paper transition-opacity hover:opacity-85"
        >
          Start Assessment <span aria-hidden="true">→</span>
        </button>
        <p className="mt-6 max-w-sm text-xs leading-relaxed text-muted">
          Your LQ Score is based on your own answers. It is a self-assessment, not an audit.
        </p>
      </div>

      <ol className="border-t border-ink/70 lg:col-span-5 lg:col-start-8">
        {CATEGORIES.map((c) => (
          <li key={c.id} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-7">
            <span aria-hidden="true" className="text-xl font-medium">
              {c.id}
            </span>
            <div>
              <h3 className="font-medium">{c.name}</h3>
              <p className="mt-1 leading-relaxed text-muted">{c.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---------------- Question flow ---------------- */

function Progress({ step, answers }: { step: number; answers: Answers }) {
  const done = answers.roles.length > 0 ? 1 : 0;
  const count = done + (answers.goals.length > 0 ? 1 : 0) + SCORED.filter((q) => answers.scored[q.n]).length;
  return (
    <div>
      <div className="flex items-baseline justify-between text-sm">
        <span>
          Question {step + 1} <span className="text-muted">of {TOTAL}</span>
        </span>
        <span className="text-muted tabular-nums" aria-live="polite">
          {count} answered
        </span>
      </div>
      <div className="mt-4 h-px bg-ink/15" aria-hidden="true">
        <div
          className="h-px bg-ink transition-[width] duration-700 ease-[var(--ease-architect)]"
          style={{ width: `${((step + 1) / TOTAL) * 100}%` }}
        />
      </div>
    </div>
  );
}

function QuestionView({
  step,
  answers,
  setAnswers,
  headRef,
  onAnswered,
}: {
  step: number;
  answers: Answers;
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>;
  headRef: React.RefObject<HTMLHeadingElement | null>;
  onAnswered: () => void;
}) {
  const isContext = step < 2;
  const ctx = isContext ? CONTEXT_QUESTIONS[step] : null;
  const q = isContext ? null : SCORED[step - 2];
  const options = ctx ? ctx.options : q!.options.map((o) => o.label);
  const key = step === 0 ? "roles" : "goals";
  const selected = (label: string) =>
    isContext ? (answers[key as "roles" | "goals"] as string[]).includes(label) : answers.scored[q!.n] === label;

  const choose = (label: string) => {
    onAnswered();
    if (isContext) {
      setAnswers((a) => {
        const list = a[key as "roles" | "goals"];
        return { ...a, [key]: list.includes(label) ? list.filter((x) => x !== label) : [...list, label] };
      });
    } else {
      setAnswers((a) => ({ ...a, scored: { ...a.scored, [q!.n]: label } }));
    }
  };

  const text = ctx ? ctx.text : q!.text;
  const name = `lq-q${step + 1}`;

  return (
    <fieldset key={step} className="lq-step mt-14 lg:mt-16">
      <legend className="sr-only">
        Question {step + 1}: {text}
      </legend>
      <h3
        ref={headRef}
        tabIndex={-1}
        aria-hidden="true"
        className="max-w-4xl text-3xl font-medium leading-[1.1] tracking-[-0.03em] outline-none sm:text-4xl lg:text-[3rem]"
      >
        {text}
      </h3>
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
        {isContext ? "Select all that apply." : step === 6 ? INSTRUCTIONS[0] : INSTRUCTIONS[1]}
      </p>

      <div className="mt-10 grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
        {options.map((label) => {
          const on = selected(label);
          return (
            <label
              key={label}
              className={`flex min-h-16 cursor-pointer items-center gap-5 border-b border-line py-4 transition-colors duration-500 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-ink ${
                on ? "text-ink" : "text-ink/70 hover:text-ink"
              }`}
            >
              <input
                type={isContext ? "checkbox" : "radio"}
                name={name}
                checked={on}
                onChange={() => choose(label)}
                className="sr-only"
              />
              <span
                aria-hidden="true"
                className={`grid size-5 shrink-0 place-items-center border transition-colors duration-500 ${
                  isContext ? "" : "rounded-full"
                } ${on ? "border-ink bg-ink" : "border-ink/40"}`}
              >
                <span
                  className={`size-2 bg-paper ${isContext ? "" : "rounded-full"} ${on ? "opacity-100" : "opacity-0"}`}
                />
              </span>
              <span className="text-base leading-snug">{label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

/* ---------------- Report ---------------- */

function useCountUp(target: number, ms = 1600) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setV(target);
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / ms);
      setV(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);
  return v;
}

function ScoreRing({ score }: { score: number }) {
  const v = useCountUp(score);
  const C = 2 * Math.PI * 88;
  return (
    <div className="relative size-60 sm:size-72">
      <svg viewBox="0 0 200 200" className="size-full -rotate-90" aria-hidden="true">
        <circle cx="100" cy="100" r="88" fill="none" stroke="var(--color-line-strong)" strokeWidth="1.5" />
        <circle
          cx="100"
          cy="100"
          r="88"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1.5"
          strokeDasharray={C}
          strokeDashoffset={C * (1 - v / 100)}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <span className="block text-6xl font-medium tabular-nums tracking-[-0.04em] sm:text-7xl">{v.toFixed(1)}</span>
          <span className="text-sm text-muted">out of 100</span>
        </div>
      </div>
    </div>
  );
}

function Radar({ cats }: { cats: LqResult["categories"] }) {
  const c = 120;
  const R = 90;
  const angle = (i: number) => (-90 + i * 90) * (Math.PI / 180);
  const pt = (i: number, r: number) => `${c + r * Math.cos(angle(i))},${c + r * Math.sin(angle(i))}`;
  return (
    <svg
      viewBox="0 0 240 240"
      className="w-full max-w-xs"
      role="img"
      aria-label={`Radar chart: ${cats.map((k) => `${k.name} ${k.score.toFixed(0)}`).join(", ")}`}
    >
      {[25, 50, 75, 100].map((s) => (
        <polygon
          key={s}
          points={cats.map((_, i) => pt(i, (R * s) / 100)).join(" ")}
          fill="none"
          stroke="var(--color-line-strong)"
          strokeWidth="1"
        />
      ))}
      {cats.map((_, i) => (
        <line
          key={i}
          x1={c}
          y1={c}
          x2={pt(i, R).split(",")[0]}
          y2={pt(i, R).split(",")[1]}
          stroke="var(--color-line-strong)"
          strokeWidth="1"
        />
      ))}
      <polygon
        className="lq-radar"
        points={cats.map((k, i) => pt(i, (R * Math.max(k.score, 2)) / 100)).join(" ")}
        fill="color-mix(in oklab, var(--color-ink) 12%, transparent)"
        stroke="var(--color-ink)"
        strokeWidth="1.5"
      />
      {cats.map((k, i) => {
        const [x, y] = pt(i, R + 16)
          .split(",")
          .map(Number);
        return (
          <text key={k.id} x={x} y={y} fill="var(--color-ink)" fontSize="12" textAnchor="middle" dominantBaseline="middle">
            {k.id}
          </text>
        );
      })}
    </svg>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="lq-step mt-24 border-t border-line pt-10 lg:mt-28">
      <h4 className="eyebrow text-muted">{title}</h4>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Report({
  r,
  onRetake,
  headRef,
}: {
  r: LqResult;
  onRetake: () => void;
  headRef: React.RefObject<HTMLHeadingElement | null>;
}) {
  const ladder = useMemo(() => [...BANDS].reverse(), []);
  return (
    <div className="mt-16 lg:mt-20">
      {/* Your LQ™ Score */}
      <div className="lq-step grid items-center gap-14 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-5">
          <ScoreRing score={r.lq} />
        </div>
        <div className="lg:col-span-7">
          <p className="eyebrow text-muted">Your LQ™ Score</p>
          <h3
            ref={headRef}
            tabIndex={-1}
            className="mt-6 text-4xl font-medium tracking-[-0.035em] outline-none sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]"
          >
            Level {r.band.level} · {r.band.name}
          </h3>
          <p className="mt-6 max-w-xl text-lg leading-[1.6] text-ink/80">{r.band.reading}</p>
          <dl className="mt-10 grid gap-6 border-t border-line pt-6 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-muted">Role</dt>
              <dd className="mt-1">{r.roles.join(" · ")}</dd>
            </div>
            <div>
              <dt className="text-muted">Goal</dt>
              <dd className="mt-1">{r.goals.join(" · ")}</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Your four pillars */}
      <Block title="Your four pillars">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-x-16">
          <ul className="lg:col-span-6">
            {r.categories.map((c) => (
              <li key={c.id} className="border-b border-line py-5 first:pt-0">
                <div className="flex items-baseline justify-between gap-6">
                  <span>{c.name}</span>
                  <span className="tabular-nums">
                    {c.score.toFixed(0)} <span className="text-muted">/ 100 · {c.label}</span>
                  </span>
                </div>
                <div className="mt-3 h-px bg-ink/15">
                  <div className="lq-bar h-px bg-ink" style={{ width: `${c.score}%` }} />
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-center lg:col-span-3">
            <Radar cats={r.categories} />
          </div>
          <ol className="lg:col-span-3" aria-label="LQ Level ladder">
            {ladder
              .map((b) => {
                const here = b.level === r.band.level;
                return (
                  <li
                    key={b.name}
                    className={`flex items-baseline justify-between gap-4 border-b border-line py-3 text-sm ${here ? "text-ink" : "text-ink/45"}`}
                  >
                    <span>
                      {b.level} · {b.name}
                    </span>
                    {here && <span className="tabular-nums">● {r.lq.toFixed(1)}</span>}
                  </li>
                );
              })
              .reverse()}
          </ol>
        </div>
      </Block>

      {/* Your profile */}
      <Block title="Your profile">
        <p className="text-sm text-muted">{r.roleWording}</p>
        <p className="mt-4 max-w-3xl text-2xl leading-[1.4] tracking-[-0.02em] text-ink">{r.band.reading}</p>
        <p className="mt-6 text-ink/80">
          Strongest pillar: <strong className="font-medium text-ink">{r.strongest.name}</strong> (
          {r.strongest.score.toFixed(1)}). Weakest pillar:{" "}
          <strong className="font-medium text-ink">{r.weakest.name}</strong> ({r.weakest.score.toFixed(1)}).
        </p>
      </Block>

      {/* Key strengths */}
      <Block title="Key strengths">
        {r.strengths.length ? (
          <ul className="border-t border-line">
            {r.strengths.map((s) => (
              <li key={s.n} className="border-b border-line py-5">
                <span className="text-sm text-muted">{CATEGORIES.find((c) => c.id === s.category)!.name}</span>
                <p className="mt-1 text-lg">{s.test}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-ink/70">None of your answers is a full Yes yet.</p>
        )}
      </Block>

      {/* Visibility and positioning gaps */}
      <Block title="Visibility and positioning gaps">
        <ol className="border-t border-line">
          {r.gaps.map((g, i) => (
            <li key={g.n} className="grid gap-4 border-b border-line py-8 sm:grid-cols-[3rem_1fr]">
              <span className="text-sm tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm text-muted">{CATEGORIES.find((c) => c.id === g.category)!.name}</span>
                  {g.mattersForGoal && (
                    <span className="border border-ink/40 px-2 py-0.5 text-xs">Matters for your goal</span>
                  )}
                </div>
                <p className="mt-3 text-xl leading-snug">{g.text}</p>
                <p className="mt-2 text-sm text-muted">Your answer: {g.answer}</p>
                <p className="mt-5 text-ink/80">
                  <span className="text-muted">LQ Standard test: </span>
                  {g.test}
                </p>
                <p className="mt-2 text-ink/80">
                  <span className="text-muted">Level141 service for this gap: </span>
                  {g.service}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Block>

      {/* Held versus visible */}
      <Block title="Held versus visible">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16">
          <div className="space-y-6 lg:col-span-6">
            {[
              { label: "Foundation · what you hold", v: r.presence.foundation },
              { label: "Footprint · what the market can see", v: r.presence.footprint },
            ].map((x) => (
              <div key={x.label}>
                <div className="flex justify-between text-sm">
                  <span>{x.label}</span>
                  <span className="tabular-nums text-muted">{x.v.toFixed(0)} / 100</span>
                </div>
                <div className="mt-3 h-px bg-ink/15">
                  <div className="lq-bar h-px bg-ink" style={{ width: `${x.v}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-2xl tracking-[-0.02em]">Presence Gap: {r.presence.reading}</p>
            <p className="mt-3 text-ink/80">{r.presence.text}</p>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Both averages come from your own answers, so the Presence Gap is a self-view, not a measurement of the
              market.
            </p>
          </div>
        </div>
      </Block>

      {/* What this means for your next stage */}
      <Block title="What this means for your next stage">
        <p className="max-w-3xl text-2xl leading-[1.4] tracking-[-0.02em] text-ink">{r.band.next}</p>
        <p className="mt-6 max-w-2xl text-ink/75">
          It is a self-assessment. The score reflects your own answers. It has not been checked against evidence and
          carries no certification. Only an LQ Audit can confirm it.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href="#register"
            className="inline-flex min-h-14 items-center justify-center gap-3 bg-ink px-8 text-sm font-medium text-paper transition-opacity hover:opacity-85"
          >
            Request an LQ Audit <span aria-hidden="true">→</span>
          </a>
          <a
            href="#register"
            className="inline-flex min-h-14 items-center justify-center gap-3 border border-ink/50 px-8 text-sm transition-colors hover:border-ink"
          >
            Discuss my results with Level141
          </a>
          <button
            type="button"
            onClick={onRetake}
            className="inline-flex min-h-14 items-center justify-center px-6 text-sm text-muted transition-colors hover:text-ink"
          >
            Retake the assessment
          </button>
        </div>
      </Block>
    </div>
  );
}
