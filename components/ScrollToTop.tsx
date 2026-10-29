"use client";

import { useEffect, useState } from "react";

/**
 * Quiet "back to top" toggle in the bottom-right corner: a fine circle with an arrow, shown after the
 * first screen. Its ring fills as you scroll, so it doubles as a discreet progress marker.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(window.scrollY > window.innerHeight * 0.8);
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const C = 2 * Math.PI * 23;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      title="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`group fixed bottom-24 right-5 z-40 grid size-12 place-items-center rounded-full bg-paper text-ink transition-[opacity,transform] duration-700 ease-[var(--ease-architect)] sm:bottom-8 sm:right-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg viewBox="0 0 48 48" className="absolute inset-0 size-12 -rotate-90" aria-hidden="true">
        <circle cx="24" cy="24" r="23" fill="none" stroke="var(--color-line-strong)" strokeWidth="1" />
        <circle
          cx="24"
          cy="24"
          r="23"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray={C}
          strokeDashoffset={C * (1 - progress)}
        />
      </svg>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4 transition-transform duration-700 ease-[var(--ease-architect)] group-hover:-translate-y-0.5"
        aria-hidden="true"
      >
        <path d="M12 19V5M6 11l6-6 6 6" />
      </svg>
    </button>
  );
}
