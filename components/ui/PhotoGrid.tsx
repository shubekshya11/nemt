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

type Img = PhotoGridProps["images"][number];

function Cell({ img, className = "" }: { img: Img; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes="(min-width: 1024px) 220px, 50vw"
        className="object-cover"
        loading="lazy"
      />
    </div>
  );
}

export function PhotoGrid({ images, layout = "default", className = "" }: PhotoGridProps) {
  const largeImage = images.find((img) => img.size === "large") || images[0];
  const smallImages = images.filter((img) => img.size === "small");

  const getDisplayImages = () => {
    if (smallImages.length >= 2) return smallImages.slice(0, 2);
    if (smallImages.length === 1) {
      const nextImage = images.find((img) => img !== largeImage && img !== smallImages[0]);
      return [smallImages[0], nextImage || largeImage];
    }
    const otherImages = images.filter((img) => img !== largeImage);
    if (otherImages.length >= 2) return otherImages.slice(0, 2);
    if (otherImages.length === 1) return [otherImages[0], largeImage];
    return [largeImage, largeImage];
  };

  const [small1, small2] = getDisplayImages();
  const mirrored = layout === "mirrored";

  return (
    <div
      className={`grid h-[300px] w-full grid-cols-2 grid-rows-2 gap-3 md:h-[360px] ${className}`}
    >
      <Cell
        img={largeImage}
        className={`row-span-2 row-start-1 ${mirrored ? "col-start-2" : "col-start-1"}`}
      />
      <Cell
        img={small1}
        className={`row-start-1 ${mirrored ? "col-start-1" : "col-start-2"}`}
      />
      <Cell
        img={small2}
        className={`row-start-2 ${mirrored ? "col-start-1" : "col-start-2"}`}
      />
    </div>
  );
}