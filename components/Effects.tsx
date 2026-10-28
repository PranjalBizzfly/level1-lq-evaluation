"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

/**
 * Page-wide interaction layer: smooth inertial scrolling, cursor spotlight, magnetic buttons,
 * 3D card tilt, hero parallax and scroll-spy for the header menu.
 * Motion runs only without a reduced-motion preference; pointer effects need a fine pointer.
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

  useEffect(() => {
    document.querySelectorAll<HTMLAnchorElement>('header a[href^="#"]').forEach((a) => {
      if (a.getAttribute("href") === `#${active}`) a.setAttribute("data-active", "");
      else a.removeAttribute("data-active");
    });
  }, [active]);

  // Pointer effects.
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;

    const hero = document.querySelector<HTMLElement>("main > section");

    const onMove = (e: PointerEvent) => {
      const target = e.target as Element | null;


      const spot = target?.closest<HTMLElement>("[data-spotlight]");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
        spot.style.setProperty("--my", `${e.clientY - r.top}px`);
        // Gentle 3D tilt toward the pointer; skipped for large panels such as the form.
        if (r.width < 760) {
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          spot.style.transform = `perspective(1100px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg) translateY(-3px)`;
          spot.setAttribute("data-tilting", "");
        }
      }

      const mag = target?.closest<HTMLElement>("[data-magnetic]");
      if (mag) {
        const r = mag.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
        const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
        mag.style.setProperty("--tx", `${dx * 6}px`);
        mag.style.setProperty("--ty", `${dy * 4}px`);
      }

      // Hero parallax: layers drift against the pointer by their depth.
      if (hero && e.clientY < hero.getBoundingClientRect().bottom) {
        const cx = e.clientX / innerWidth - 0.5;
        const cy = e.clientY / innerHeight - 0.5;
        hero.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
          const d = Number(el.dataset.parallax) || 10;
          el.style.translate = `${(-cx * d).toFixed(1)}px ${(-cy * d).toFixed(1)}px`;
        });
      }
    };

    const onOut = (e: PointerEvent) => {
      const to = e.relatedTarget as Node | null;
      const mag = (e.target as Element | null)?.closest<HTMLElement>("[data-magnetic]");
      if (mag && !mag.contains(to)) {
        mag.style.removeProperty("--tx");
        mag.style.removeProperty("--ty");
      }
      const spot = (e.target as Element | null)?.closest<HTMLElement>("[data-tilting]");
      if (spot && !spot.contains(to)) {
        spot.style.removeProperty("transform");
        spot.removeAttribute("data-tilting");
      }
    };


    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onOut, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
    };
  }, []);

  return <div aria-hidden="true" className="scroll-progress" />;
}
