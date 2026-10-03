import Image from "next/image";

interface PhotoGridProps {
  images: {
    src: string;
    alt: string;
    size?: "large" | "small";
  }[];
  layout?: "default" | "mirrored" | "stacked";
  className?: string;
}

export function PhotoGrid({ images, layout = "default", className = "" }: PhotoGridProps) {
  const largeImage = images.find(img => img.size === "large") || images[0];
  const smallImages = images.filter(img => img.size === "small");
  
  // Get 2 small images for display, with better fallback logic
  const getDisplayImages = () => {
    if (smallImages.length >= 2) return smallImages.slice(0, 2);
    if (smallImages.length === 1) {
      const nextImage = images.find(img => img !== largeImage && img !== smallImages[0]);
      return [smallImages[0], nextImage || largeImage];
    }
    const largeIndex = images.indexOf(largeImage);
    const otherImages = images.filter((_, i) => i !== largeIndex);
    if (otherImages.length >= 2) return otherImages.slice(0, 2);
    if (otherImages.length === 1) return [otherImages[0], largeImage];
    return [largeImage, largeImage];
  };

  const displaySmallImages = getDisplayImages();

  if (layout === "stacked") {
    return (
      <div className={`grid grid-cols-2 grid-rows-2 gap-3 h-full min-h-[200px] ${className}`}>
        <div className="row-span-2">
          <div className="relative w-full overflow-hidden h-full">
            <Image
              src={largeImage.src}
              alt={largeImage.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src={displaySmallImages[0].src}
              alt={displaySmallImages[0].alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src={displaySmallImages[1].src}
              alt={displaySmallImages[1].alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }

  if (layout === "mirrored") {
    return (
      <div className={`grid grid-cols-2 grid-rows-2 gap-3 h-full min-h-[200px] ${className}`}>
        <div className="row-span-2">
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src={largeImage.src}
              alt={largeImage.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={displaySmallImages[0].src}
              alt={displaySmallImages[0].alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={displaySmallImages[1].src}
              alt={displaySmallImages[1].alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-2 grid-rows-2 gap-3 h-full min-h-[200px] ${className}`}>
      <div className="row-span-2">
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src={largeImage.src}
            alt={largeImage.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div>
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={displaySmallImages[0].src}
            alt={displaySmallImages[0].alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div>
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={displaySmallImages[1].src}
            alt={displaySmallImages[1].alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
