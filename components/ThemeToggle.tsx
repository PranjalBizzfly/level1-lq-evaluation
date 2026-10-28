"use client";

import { useEffect } from "react";

type Theme = "light" | "dark";

const apply = (t: Theme) => {
  document.documentElement.dataset.theme = t;
};

export default function ThemeToggle({ className = "" }: { className?: string }) {
  // Follow the system setting until the visitor makes a choice.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem("theme");
      } catch {}
      if (saved !== "light" && saved !== "dark") apply(mq.matches ? "dark" : "light");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next: Theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    apply(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      title="Toggle light and dark theme"
      data-magnetic
      className={`glass grid size-11 place-items-center rounded-full ${className}`}
    >
      {/* Moon in light theme, sun in dark theme. */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-[1.15rem] dark:hidden" aria-hidden="true">
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
      </svg>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className="hidden size-[1.15rem] dark:block" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
