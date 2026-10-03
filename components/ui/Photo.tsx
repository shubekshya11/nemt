import Image from "next/image";

interface PhotoProps {
  src: string;
  alt: string;
  ratio: string;
  className?: string;
  priority?: boolean;
  objectPosition?: string;
}

export function Photo({ src, alt, ratio, className = "", priority = false, objectPosition = "center" }: PhotoProps) {
  return (
    <div className={`relative ${ratio} w-full overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover"
        style={{ objectPosition }}
        priority={priority}
        loading={priority ? undefined : "lazy"}
      />
    </div>
  );
}
