"use client";

import { useEffect, useRef, useState } from "react";
import { PRIMARY_NAV } from "@/lib/site";
import { Arrow, BTN, BTN_ON_LIGHT, Logo } from "@/components/ui";
import ThemeToggle from "@/components/ThemeToggle";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: lock scroll, close on Escape, keep focus inside while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !menuRef.current) return;
      const items = [toggleRef.current, ...menuRef.current.querySelectorAll<HTMLElement>("a")].filter(
        Boolean,
      ) as HTMLElement[];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b text-ink transition-[background-color,border-color,backdrop-filter] duration-500 ${
          solid ? "border-line bg-paper/90 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-5 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <div
          className={`container-x flex items-center justify-between gap-6 transition-[height] duration-300 ${
            scrolled ? "h-14 sm:h-16" : "h-14 sm:h-[4.5rem] lg:h-20"
          }`}
        >
          <a href="#top" aria-label="Level141 — Back to top" className="relative z-10 flex min-h-11 shrink-0 items-center">
            <Logo className="h-[1.15rem] w-auto sm:h-5" />
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-0.5 2xl:gap-1">
              {PRIMARY_NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="block whitespace-nowrap px-2 py-2 text-[0.85rem] text-ink hover:text-ink 2xl:px-3.5 2xl:text-[0.9rem]"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative z-10 flex items-center gap-3">
            <a
              href="#register"
              className={`${BTN} ${BTN_ON_LIGHT} hidden min-h-11 px-5 sm:inline-flex`}
            >
              <span>Discover My LQ™</span>
              <Arrow />
            </a>
            <ThemeToggle />
            <button
              ref={toggleRef}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
              className="grid size-11 place-items-center border border-ink/20 hover:border-ink lg:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-5" aria-hidden="true">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Sibling of <header>: its backdrop-filter would otherwise become this panel's containing block. */}
      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!open}
        className={`fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-paper text-ink lg:hidden ${
          scrolled ? "top-14 sm:top-16" : "top-14 sm:top-[4.5rem]"
        }`}
      >
        <nav aria-label="Mobile" className="container-x flex min-h-full flex-col justify-between gap-10 py-8">
          <ul className="divide-y divide-line border-y border-line">
            {PRIMARY_NAV.map((n, i) => (
              <li key={n.href} className="animate-rise" style={{ animationDelay: `${i * 40}ms` }}>
                <a href={n.href} onClick={() => setOpen(false)} className="flex items-center justify-between py-4 text-2xl font-light tracking-[-0.02em]">
                  {n.label}
                  <Arrow className="text-ink" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#register"
            onClick={() => setOpen(false)}
            className={`${BTN} ${BTN_ON_LIGHT} inline-flex min-h-14 px-6`}
          >
            <span>Discover My LQ™</span>
            <Arrow />
          </a>
        </nav>
      </div>
    </>
  );
}
