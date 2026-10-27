"use client";

import { useEffect, useRef, useState } from "react";
import { VIBE } from "@/content/lq";
import { Accent, Cta, Section, SectionHead } from "@/components/ui";

// SECTION 4 — WHAT WE EVALUATE
export default function Vibe() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  // The dimension crossing the middle of the viewport is the active one.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <Section id="vibe" labelledBy="vibe-title" className="border-t border-line">
      <SectionHead n={4}>What We Evaluate</SectionHead>

      <div data-reveal className="mt-20 grid gap-y-8 lg:mt-32 lg:grid-cols-12 lg:items-start lg:gap-x-10">
        <h2 id="vibe-title" className="headline text-[2.25rem] sm:text-5xl lg:col-span-8 lg:text-[3.75rem]">
          <span className="block">Your Personal Brand</span> <Accent>Four Essential Dimensions</Accent>
        </h2>
        <p className="text-lg leading-[1.85] lg:col-span-4 lg:col-start-9">
          The LQ™ Evaluation is built around <strong className="font-semibold">VIBE™</strong>, Level141&apos;s approach to
          Personal Brand Architecture.
        </p>
      </div>

      <div className="mt-24 lg:mt-36 lg:grid lg:grid-cols-12 lg:gap-x-10">
        {/* Sticky index: the letter of the dimension in view turns solid. */}
        <nav aria-label="VIBE™ dimensions" className="hidden lg:col-span-4 lg:block">
          <ol className="sticky top-32 space-y-2">
            {VIBE.map((d, i) => (
              <li key={d.letter}>
                <a
                  href={`#vibe-${d.letter.toLowerCase()}`}
                  aria-current={active === i ? "true" : undefined}
                  className="group flex items-baseline gap-6"
                >
                  <span
                    aria-hidden="true"
                    className={`headline text-[7.5rem] leading-[0.95] transition-all duration-700 xl:text-[8.5rem] ${
                      active === i ? "" : "text-outline group-hover:[--outline:var(--color-ink)]"
                    }`}
                  >
                    {d.letter}
                  </span>
                  <span
                    className={`eyebrow transition-opacity duration-700 ${active === i ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  >
                    {d.name}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Dimensions scroll past on the right. */}
        <ol className="border-t border-line-strong lg:col-span-7 lg:col-start-6">
          {VIBE.map((d, i) => (
            <li
              key={d.letter}
              id={`vibe-${d.letter.toLowerCase()}`}
              data-index={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="border-b border-line-strong py-14 sm:py-20 lg:py-28"
            >
              <div data-reveal>
                <div className="flex items-baseline gap-5">
                  <span aria-hidden="true" className="headline text-6xl leading-none lg:hidden">
                    {d.letter}
                  </span>
                  <h3 className="eyebrow">
                    0{i + 1} — {d.name}
                  </h3>
                </div>
                <p className="headline mt-6 text-3xl sm:text-4xl lg:text-[2.75rem]">{d.question}</p>
                <div className="mt-8 max-w-xl space-y-5 text-lg leading-[1.85]">
                  {d.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div data-reveal className="mt-16 lg:mt-24">
        <Cta label="Start My LQ™ Evaluation →" />
      </div>
    </Section>
  );
}
