"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

/**
 * Page-wide interaction layer: smooth scrolling, header scroll-spy and card-row alignment.
 * Pointer gimmicks (tilt, glow, magnetic pull) were removed for a calmer, luxury feel.
 */
export default function Effects() {
  const [active, setActive] = useState<string>("");

  // Smooth, weighted scrolling; in-page links glide to their section below the fixed header.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, anchors: true });
    let raf = 0;
    const tick = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  // Split headings into words so each rises from behind a mask, staggered (reference-style).
  // Only text nodes are wrapped, so nested accents (serif spans) and the wording stay intact.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const heads = [...document.querySelectorAll<HTMLElement>("main h1.headline, main h2.headline")];
    for (const h of heads) {
      if (h.classList.contains("split-heading")) continue;
      let i = 0;
      const walker = document.createTreeWalker(h, NodeFilter.SHOW_TEXT);
      const nodes: Text[] = [];
      while (walker.nextNode()) nodes.push(walker.currentNode as Text);
      for (const node of nodes) {
        const parts = (node.textContent ?? "").split(/(\s+)/);
        const frag = document.createDocumentFragment();
        for (const part of parts) {
          if (!part) continue;
          if (/^\s+$/.test(part)) {
            frag.append(document.createTextNode(part));
            continue;
          }
          const outer = document.createElement("span");
          outer.className = "w";
          const inner = document.createElement("span");
          inner.textContent = part;
          inner.style.setProperty("--i", String(i++));
          outer.append(inner);
          frag.append(outer);
        }
        node.replaceWith(frag);
      }
      h.classList.add("split-heading");
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    heads.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, []);

  // Scroll-spy: track the section in view and mark its header link.
  useEffect(() => {
    const els = [...document.querySelectorAll<HTMLElement>("main > section[id]")];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Card rows: give matching parts (header strip, eyebrow, title) the same height across each row,
  // so dividers and descriptions line up at every screen width regardless of how text wraps.
  useEffect(() => {
    const PARTS = ".border-b, h3, p.headline";
    const align = () => {
      const cards = [...document.querySelectorAll<HTMLElement>("main li[data-spotlight], main [data-spotlight].rounded-3xl")];
      const parts = cards.map((c) => [...c.querySelectorAll<HTMLElement>(PARTS)].filter((p) => p.closest("[data-spotlight]") === c));
      parts.flat().forEach((p) => (p.style.minHeight = ""));
      const rows = new Map<string, number[]>();
      cards.forEach((c, i) => {
        const key = `${c.parentElement && [...document.querySelectorAll("*")].indexOf(c.parentElement)}:${Math.round(c.getBoundingClientRect().top + scrollY)}`;
        rows.set(key, [...(rows.get(key) ?? []), i]);
      });
      for (const idx of rows.values()) {
        if (idx.length < 2) continue;
        const n = Math.min(...idx.map((i) => parts[i].length));
        for (let k = 0; k < n; k++) {
          const els = idx.map((i) => parts[i][k]);
          const max = Math.ceil(Math.max(...els.map((e) => e.getBoundingClientRect().height)));
          els.forEach((e) => (e.style.minHeight = `${max}px`));
        }
      }
    };
    let t = 0;
    const schedule = () => {
      cancelAnimationFrame(t);
      t = requestAnimationFrame(align);
    };
    schedule();
    document.fonts?.ready.then(schedule);
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(t);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  useEffect(() => {
    document.querySelectorAll<HTMLAnchorElement>('header a[href^="#"]').forEach((a) => {
      if (a.getAttribute("href") === `#${active}`) a.setAttribute("data-active", "");
      else a.removeAttribute("data-active");
    });
  }, [active]);

  return null;
}
