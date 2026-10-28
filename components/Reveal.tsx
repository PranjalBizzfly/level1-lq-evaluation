"use client";

import { useEffect } from "react";

/** Adds `is-visible` to every [data-reveal] element as it scrolls into view. */
export default function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    
    // Immediately make visible elements that are already within or near the viewport
    const checkImmediate = () => {
      const vh = window.innerHeight;
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh + 150) {
          el.classList.add("is-visible");
        }
      });
    };

    checkImmediate();
    requestAnimationFrame(checkImmediate);

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "250px 0px 150px 0px", threshold: 0.01 },
    );

    els.forEach((el) => {
      if (!el.classList.contains("is-visible")) {
        io.observe(el);
      }
    });

    // Safety fallback: ensure all elements are visible after a short delay
    const fallbackTimer = setTimeout(() => {
      els.forEach((el) => el.classList.add("is-visible"));
    }, 700);

    return () => {
      io.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  return null;
}
