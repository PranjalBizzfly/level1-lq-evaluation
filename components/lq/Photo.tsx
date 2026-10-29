import Image, { type StaticImageData } from "next/image";

type PhotoProps = {
  src: StaticImageData;
  alt: string;
  /** Tailwind aspect class, e.g. "aspect-[4/5]". */
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** CSS object-position for the crop, e.g. "50% 20%". */
  position?: string;
};

/**
 * Client photography in a rounded frame. On entry the frame opens from an inset mask; while
 * scrolling, the image drifts slightly inside it (parallax). next/image serves resized, modern
 * formats with a blurred placeholder.
 */
export default function Photo({
  src,
  alt,
  aspect = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
  className = "",
  position = "50% 50%",
}: PhotoProps) {
  return (
    <div data-reveal className={`photo-mask relative overflow-hidden bg-paper-2 ${aspect} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        className="photo-drift object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
