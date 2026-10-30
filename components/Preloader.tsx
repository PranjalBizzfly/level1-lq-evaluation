"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/ui";

/**
 * Brand intro and section transitions (after the reference site):
 * - On load: a black screen with the official logo and a 00→100% counter, then the curtain lifts.
 * Only shown when JS runs (html.js), and skipped entirely for reduced-motion visitors.
 */
export default function Preloader() {
  const [pct, setPct] = useState(0);
  const [phase, setPhase] = useState<"loading" | "leaving" | "done">("loading");

  // Intro counter.
  useEffect(() => {
    let seen = false;
    try {
      seen = Boolean(sessionStorage.getItem("lq-intro"));
      sessionStorage.setItem("lq-intro", "1");
    } catch {}
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }
    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    const DURATION = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / DURATION);
      setPct(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setPhase("leaving");
        setTimeout(() => {
          setPhase("done");
          document.documentElement.style.overflow = "";
        }, 1100);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <>
      {phase !== "done" && (
        <div
          aria-hidden="true"
          className={`preloader fixed inset-0 z-[200] flex flex-col bg-black text-white transition-transform duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
            phase === "leaving" ? "-translate-y-full" : ""
          }`}
        >
          <div className="flex flex-1 flex-col items-center justify-center">
            <Logo className="preloader-logo h-7 w-auto sm:h-9" />
            <div className="mt-14 w-60">
              <div className="flex items-baseline justify-between text-xs text-white/70">
                <span>Loading the experience</span>
                <span className="tabular-nums text-white">{String(pct).padStart(2, "0")} %</span>
              </div>
              <div className="mt-3 h-px bg-white/15">
                <div className="h-px origin-left bg-white" style={{ transform: `scaleX(${pct / 100})` }} />
              </div>
            </div>
          </div>
          <div className="container-x flex items-center justify-between pb-8 text-xs text-white/60">
            <span>Personal Brand Architecture™</span>
            <span>The Level Quotient™ Evaluation</span>
          </div>
        </div>
      )}

    </>
  );
}
