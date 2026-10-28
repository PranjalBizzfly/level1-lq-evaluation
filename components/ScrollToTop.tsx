"use client";

import { useEffect, useState } from "react";

/** Floating scroll-to-top toggle pinned to the bottom-right corner. */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-20 sm:bottom-8 right-5 sm:right-8 z-40 transition-all duration-500 ease-out ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        title="Scroll to top"
        data-magnetic
        className="glass group relative grid size-12 place-items-center rounded-full border border-line-strong/80 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-ink hover:scale-110 active:scale-95"
      >
        <span className="sr-only">Scroll to top</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4 text-ink transition-transform duration-300 group-hover:-translate-y-1"
          aria-hidden="true"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}

