import type { CSSProperties, ReactNode } from "react";
import { CTA_TARGET } from "@/content/lq";

/** Official Level141 wordmark, taken from the live site's header. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="276.87 480.52 726.27 113.63"
      className={className}
      fill="currentColor"
      role="img"
      aria-label="Level141"
      focusable="false"
    >
      <path d="M366.975 534.439L356.734 534.439L356.734 510.559L333.679 510.559L333.679 500.329L366.975 500.329ZM333.679 574.339L300.383 574.339L300.383 540.218L310.624 540.218L310.624 564.098L333.679 564.098ZM277.866 593.147L389.491 593.147L389.491 481.522L277.866 481.522Z" />
      <path d="M464.854 502.269L454.188 502.269L454.188 572.394L499.027 572.394L499.027 562.615L464.854 562.615Z" />
      <path d="M527.966 541.975L561.744 541.975L561.744 532.493L527.966 532.493L527.966 512.048L562.928 512.048L562.928 502.269L517.300 502.269L517.300 572.394L563.718 572.394L563.718 562.615L527.966 562.615Z" />
      <path d="M614.088 560.544L593.445 502.270L582.087 502.270L607.373 572.395L620.706 572.395L646.089 502.270L634.731 502.270Z" />
      <path d="M674.729 541.975L708.507 541.975L708.507 532.493L674.729 532.493L674.729 512.048L709.691 512.048L709.691 502.269L664.063 502.269L664.063 572.394L710.481 572.394L710.481 562.615L674.729 562.615Z" />
      <path d="M744.754 502.269L734.088 502.269L734.088 572.394L778.927 572.394L778.927 562.615L744.754 562.615Z" />
      <path d="M859.717 503.259L849.644 503.259L835.618 516.394L835.618 528.542L849.644 515.505L850.038 515.505L850.038 563.307L835.716 563.307L835.716 572.394L872.852 572.394L872.852 563.307L859.717 563.307Z" />
      <path d="M922.135 547.308L900.703 547.308L922.135 515.407ZM932.109 503.259L919.271 503.259L890.726 546.813L890.726 555.405L922.035 555.505L922.035 572.394L932.109 572.394L932.109 555.505L941.591 555.505L941.591 547.405L932.109 547.405Z" />
      <path d="M988.999 563.308L988.999 503.260L978.925 503.260L964.900 516.395L964.900 528.543L978.925 515.505L979.320 515.505L979.320 563.308L964.998 563.308L964.998 572.395L1002.134 572.395L1002.134 563.308Z" />
    </svg>
  );
}

/** The corner-bracket mark used on the Level141 site. */
export function Corner({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 112.18 114.92"
      className={`${className} ${flip ? "rotate-180" : ""}`}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 0h112.18v114.92H77.68V34.46H0z" />
    </svg>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

type CtaProps = {
  label: string;
  href?: string;
  /** Surface the button sits on. */
  tone?: "light" | "dark";
  variant?: "primary" | "secondary";
  className?: string;
};

/** Shared button shape; pair with a colour from BTN_ON_LIGHT / BTN_ON_DARK. */
export const BTN =
  "group items-center justify-center gap-3 rounded-full text-center text-[0.95rem] font-medium tracking-[-0.005em]";
export const BTN_ON_LIGHT = "btn-solid bg-ink text-paper hover:bg-ink-3";
export const BTN_ON_DARK = "btn-solid bg-paper text-ink hover:bg-paper-2";

const CTA_STYLES = {
  light: {
    primary: BTN_ON_LIGHT,
    secondary: "glass btn-sheen text-ink",
  },
  dark: {
    primary: BTN_ON_DARK,
    secondary: "glass btn-sheen text-ink",
  },
};

/** Pill CTA matching the live site, with a magnetic pull toward the cursor. A trailing "→" becomes an animated arrow. */
export function Cta({ label, href = CTA_TARGET, tone = "light", variant = "primary", className = "" }: CtaProps) {
  return (
    <a
      href={href}
      data-magnetic
      className={`${BTN} inline-flex min-h-12 px-6 sm:whitespace-nowrap ${CTA_STYLES[tone][variant]} ${className}`}
    >
      <span>{label.replace(/\s*→$/, "")}</span>
      <Arrow />
    </a>
  );
}

export function Eyebrow({ index, children, className = "" }: { index?: string; children: ReactNode; className?: string }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${className}`}>
      {index && (
        <>
          <span aria-hidden="true" className="tabular-nums">
            {index}
          </span>
          <span aria-hidden="true" className="h-px w-8 bg-current" />
        </>
      )}
      <span>{children}</span>
    </p>
  );
}

export function Accent({ children }: { children: ReactNode }) {
  return <span className="serif-accent">{children}</span>;
}

type SectionProps = {
  id: string;
  labelledBy: string;
  tone?: "paper" | "muted" | "ink";
  children: ReactNode;
  className?: string;
};

const TONES = {
  paper: "bg-paper text-ink",
  muted: "bg-paper-2 text-ink",
  ink: "bg-ink text-paper [--outline:var(--color-paper)]",
};

/** Page section with generous architectural vertical rhythm so every chapter has its own room. */
export function Section({ id, labelledBy, tone = "paper", children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative py-32 sm:py-44 lg:py-52 ${TONES[tone]} ${className}`}
    >
      <div className="container-x">{children}</div>
    </section>
  );
}

/** Section label as on the live site: "02 —— Label", with the short rule drawing in on reveal. */
export function SectionHead({ n, children }: { n: number; children: ReactNode }) {
  return (
    <div data-reveal className="relative w-full pt-6">
      {/* Full-width hairline that draws in, with the label beneath it (editorial section opener). */}
      <span aria-hidden="true" className="rule-draw absolute inset-x-0 top-0 h-px bg-line-strong" />
      <p className="eyebrow flex items-center gap-3">
        <span aria-hidden="true" className="tabular-nums text-muted">
          {String(n).padStart(2, "0")}
        </span>
        <span>{children}</span>
      </p>
    </div>
  );
}

/** Staggers a reveal by `step` ms per index. */
export const delay = (i: number, step = 80) => ({ "--reveal-delay": `${i * step}ms` }) as CSSProperties;
