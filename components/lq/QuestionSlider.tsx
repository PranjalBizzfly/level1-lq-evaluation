"use client";

import { useState } from "react";
import { REAL_QUESTIONS } from "@/content/lq";

/** One question at a time, set large, with a counter and prev/next controls (reference-style slider). */
export default function QuestionSlider() {
  const [i, setI] = useState(0);
  const n = REAL_QUESTIONS.length;
  const go = (d: number) => setI((v) => (v + d + n) % n);

  return (
    <div data-reveal className="border-y border-line-strong">
      <div className="flex items-center justify-between gap-6 py-5 text-xs uppercase tracking-[0.2em]">
        <span>Consider these questions</span>
        <span aria-hidden="true" className="tabular-nums text-muted">
          {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </span>
      </div>

      <div aria-live="polite" className="grid min-h-[16rem] items-center py-10 sm:min-h-[20rem] lg:min-h-[22rem]">
        {REAL_QUESTIONS.map((q, k) => (
          <p
            key={q}
            aria-hidden={k !== i}
            className={`col-start-1 row-start-1 text-ink max-w-5xl text-3xl font-light leading-[1.15] tracking-[-0.03em] transition-[opacity,transform] duration-700 ease-[var(--ease-architect)] sm:text-5xl lg:text-[3.5rem] ${
              k === i ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
            }`}
          >
            {q}
          </p>
        ))}
      </div>

      <div className="flex items-center justify-center gap-6 pb-8">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous question"
          className="glass grid size-12 place-items-center rounded-full"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
            aria-hidden="true"
          >
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
        </button>
        <div aria-hidden="true" className="flex gap-2">
          {REAL_QUESTIONS.map((q, k) => (
            <span
              key={q}
              className={`h-px transition-all duration-500 ${k === i ? "w-8 bg-ink" : "w-3 bg-line-strong"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next question"
          className="glass grid size-12 place-items-center rounded-full"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
