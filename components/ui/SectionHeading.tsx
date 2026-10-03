interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, eyebrow, className = "" }: SectionHeadingProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {eyebrow && (
        <p className="text-sm font-medium tracking-wide uppercase" style={{ color: 'var(--color-secondary-600)' }}>
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
