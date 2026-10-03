interface SectionHeadingProps {
  title: string;
  intro?: string;
  textColor?: "gray" | "white";
  className?: string;
}

export function SectionHeading({ title, intro, textColor = "gray", className = "" }: SectionHeadingProps) {
  const headingColor = textColor === "white" ? "text-white" : "text-gray-900";
  const introColor = textColor === "white" ? "text-white/90" : "text-gray-600";
  
  return (
    <div className={`text-center space-y-4 ${className}`}>
      <h2 className={`text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] ${headingColor}`}>
        {title}
      </h2>
      <div className="w-24 h-1 mx-auto rounded" style={{ backgroundColor: 'var(--color-primary-600)' }}></div>
      {intro && (
        <p className={`text-lg max-w-2xl mx-auto ${introColor}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
