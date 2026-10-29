import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

type PhotoBandProps = {
  src: StaticImageData;
  alt: string;
  children: ReactNode;
  /** Height of the band. */
  className?: string;
  sizes?: string;
};

/**
 * A photograph carrying a section's key message: the image fills a rounded band, a soft dark
 * gradient keeps the white text legible, and the frame opens and drifts like Photo.
 */
export default function PhotoBand({
  src,
  alt,
  children,
  className = "min-h-[30rem] sm:min-h-[34rem]",
  sizes = "100vw",
}: PhotoBandProps) {
  return (
    <div data-reveal className={`photo-mask relative isolate flex overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} placeholder="blur" className="photo-drift -z-20 object-cover" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/45 to-black/10"
      />
      <div className="photo-band mt-auto w-full p-8 text-white sm:p-12 lg:p-16">{children}</div>
    </div>
  );
}
