"use client";

import { useEffect, useState } from "react";
import { Arrow, BTN, BTN_ON_LIGHT } from "@/components/ui";

/** Sticky mobile CTA: shown after the hero, hidden while the final CTA or form is on screen. */
export default function MobileCtaBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const targets = ["final-cta", "assessment", "register"].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!hero || !("IntersectionObserver" in window)) return;

    const state = { pastHero: false, nearForm: false };
    const update = () => setShow(state.pastHero && !state.nearForm);
    const visible = new Set<Element>();

    const heroIo = new IntersectionObserver(([e]) => {
      state.pastHero = !e.isIntersecting;
      update();
    });
    const formIo = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      state.nearForm = visible.size > 0;
      update();
    });
    heroIo.observe(hero);
    targets.forEach((t) => formIo.observe(t));
    return () => {
      heroIo.disconnect();
      formIo.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper p-3.5 transition-transform duration-500 sm:hidden ${
        show ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.875rem, env(safe-area-inset-bottom))" }}
    >
      <a href="#assessment" tabIndex={show ? 0 : -1} className={`${BTN} ${BTN_ON_LIGHT} flex min-h-12 w-full px-6`}>
        <span>Discover My LQ™</span>
        <Arrow />
      </a>
    </div>
  );
}
