"use client";

import { useState, type ReactNode } from "react";

type Item = { title: ReactNode; body: ReactNode; key: string };

/** Numbered editorial accordion (one item open at a time) with a +/× toggle and smooth height. */
export default function Accordion({
  items,
  idPrefix,
  defaultOpen = 0,
}: {
  items: Item[];
  idPrefix: string;
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <ol className="border-t border-line-strong">
      {items.map((it, i) => {
        const isOpen = open === i;
        const id = `${idPrefix}-${i}`;
        return (
          <li key={it.key} data-reveal className="border-b border-line-strong">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="group flex w-full items-baseline gap-5 py-8 text-left sm:gap-8 sm:py-9"
              >
                <span className="text-sm tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1 text-2xl font-light tracking-[-0.025em] transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl">
                  {it.title}
                </span>
                <span
                  aria-hidden="true"
                  className={`relative size-5 shrink-0 self-center transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
                >
                  <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current" />
                  <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current" />
                </span>
              </button>
            </h3>
            <div
              id={id}
              role="region"
              className={`grid transition-[grid-template-rows] duration-700 ease-[var(--ease-architect)] ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="max-w-2xl pb-10 pl-9 text-lg leading-[1.8] text-muted sm:pl-14">{it.body}</div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
