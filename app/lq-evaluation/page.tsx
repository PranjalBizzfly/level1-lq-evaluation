import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Effects from "@/components/Effects";
import Preloader from "@/components/Preloader";
import ScrollToTop from "@/components/ScrollToTop";
import SiteHeader from "@/components/lq/SiteHeader";
import SiteFooter from "@/components/lq/SiteFooter";
import MobileCtaBar from "@/components/lq/MobileCtaBar";
import Hero from "@/components/lq/Hero";
import RealQuestion from "@/components/lq/RealQuestion";
import IntroducingLq from "@/components/lq/IntroducingLq";
import Vibe from "@/components/lq/Vibe";
import WhyItMatters from "@/components/lq/WhyItMatters";
import WhatYouReceive from "@/components/lq/WhatYouReceive";
import WhoItsFor from "@/components/lq/WhoItsFor";
import HowItWorks from "@/components/lq/HowItWorks";
import BiggerPicture from "@/components/lq/BiggerPicture";
import FinalCta from "@/components/lq/FinalCta";
import Register from "@/components/lq/Register";
import Assessment from "@/components/lq/Assessment";

const DESCRIPTION =
  "Discover where your personal brand stands today with the complimentary LQ™ Snapshot. Understand your strengths, identify potential gaps and discover opportunities to strengthen your professional reputation.";

export const metadata: Metadata = {
  title: "The Level Quotient™ Evaluation",
  description: DESCRIPTION,
  openGraph: {
    title: "The Level Quotient™ Evaluation | Level141",
    description: "You've Built Your Success. Does Your Personal Brand Reflect It?",
    type: "website",
    siteName: "Level141",
  },
};

export default function LqEvaluationPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <RealQuestion />
        <IntroducingLq />
        <Vibe />
        <WhyItMatters />
        <WhatYouReceive />
        <WhoItsFor />
        <HowItWorks />
        <BiggerPicture />
        <FinalCta />
        <Assessment />
        <Register />
      </main>
      <SiteFooter />
      <MobileCtaBar />
      <Reveal />
      <Effects />
      <Preloader />
      <ScrollToTop />
    </>
  );
}
