import { Photo } from "./Photo";

interface CardProps {
  image?: string;
  icon?: string;
  title: string;
  description: string;
  className?: string;
}

export function Card({ image, icon, title, description, className = "" }: CardProps) {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-6 ${className}`}>
      {(image || icon) && (
        <div className="mb-4">
          {image ? (
            <Photo src={image} alt={title} ratio="aspect-[3/2]" />
          ) : (
            <div className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-primary-50)' }}>
              <span className="text-2xl">{icon}</span>
            </div>
          )}
        </div>
      )}
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>
  );
}
