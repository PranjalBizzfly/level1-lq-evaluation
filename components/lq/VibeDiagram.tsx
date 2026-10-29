"use client";

import { useState } from "react";
import { VIBE } from "@/content/lq";

const C = 160;
const R_IN = 74;
const R_OUT = 150;

/** Ring segment from angle a0 to a1 (degrees, 0 = top, clockwise). */
function segment(a0: number, a1: number) {
  const pt = (r: number, a: number) => {
    const rad = ((a - 90) * Math.PI) / 180;
    return `${(C + r * Math.cos(rad)).toFixed(2)} ${(C + r * Math.sin(rad)).toFixed(2)}`;
  };
  return `M ${pt(R_OUT, a0)} A ${R_OUT} ${R_OUT} 0 0 1 ${pt(R_OUT, a1)} L ${pt(R_IN, a1)} A ${R_IN} ${R_IN} 0 0 0 ${pt(R_IN, a0)} Z`;
}

const labelAt = (a: number) => {
  const rad = ((a - 90) * Math.PI) / 180;
  const r = (R_IN + R_OUT) / 2;
  return { x: C + r * Math.cos(rad), y: C + r * Math.sin(rad) };
};

/**
 * VIBE™ diagram: LQ™ at the centre, the four dimensions around it.
 * Hover, focus or tap a dimension to see its approved question.
 */
export default function VibeDiagram() {
  const [active, setActive] = useState(0);
  const d = VIBE[active];

  return (
    <figure className="mx-auto w-full max-w-md">
      <svg
        viewBox="0 0 320 320"
        className="w-full"
        role="img"
        aria-label="VIBE™: Vision, Impact, Business Growth and Evolution around the Level Quotient™"
      >
        {VIBE.map((v, i) => {
          const a0 = i * 90 + 2;
          const a1 = (i + 1) * 90 - 2;
          const on = i === active;
          const l = labelAt(i * 90 + 45);
          return (
            <g key={v.letter} onMouseEnter={() => setActive(i)} className="cursor-pointer">
              <path
                d={segment(a0, a1)}
                className={`transition-[fill,stroke] duration-500 ${on ? "fill-ink stroke-ink" : "fill-transparent stroke-line-strong"}`}
                strokeWidth="1"
              />
              <text
                x={l.x}
                y={l.y}
                textAnchor="middle"
                dominantBaseline="central"
                className={`font-serif text-[30px] italic transition-[fill] duration-500 ${on ? "fill-paper" : "fill-ink"}`}
              >
                {v.letter}
              </text>
            </g>
          );
        })}
        <circle cx={C} cy={C} r={R_IN - 12} className="fill-paper stroke-line" strokeWidth="1" />
        <text
          x={C}
          y={C - 6}
          textAnchor="middle"
          dominantBaseline="central"
          className="fill-ink text-[26px] font-light"
        >
          LQ™
        </text>
        <text x={C} y={C + 20} textAnchor="middle" className="fill-muted text-[8px] tracking-[0.22em]">
          VIBE™
        </text>
      </svg>

      {/* Keyboard- and touch-friendly controls for the same four dimensions. */}
      <div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="VIBE™ dimensions">
        {VIBE.map((v, i) => (
          <button
            key={v.letter}
            type="button"
            aria-pressed={i === active}
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            className={`min-h-11 border-b px-2 text-sm transition-colors duration-500 ${
              i === active ? "border-ink text-ink" : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {v.name}
          </button>
        ))}
      </div>
      <figcaption aria-live="polite" className="mt-6 text-center">
        <span className="eyebrow block">
          {d.letter} — {d.name}
        </span>
        <span className="mt-3 block text-lg font-light">{d.question}</span>
      </figcaption>
    </figure>
  );
}
