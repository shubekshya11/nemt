import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "gold";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({ children, href, onClick, variant = "primary", className = "", type = "button", disabled = false }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-colors hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md";
  
  const variantStyles = {
    primary: "text-white",
    secondary: "text-gray-900 border-2 border-gray-300 hover:bg-gray-50",
    gold: "text-gray-900"
  };

  const style = variant === "primary" 
    ? { backgroundColor: 'var(--color-primary-600)', outlineColor: 'var(--color-primary-600)' }
    : variant === "gold"
    ? { backgroundColor: 'var(--color-secondary-500)', outlineColor: 'var(--color-secondary-500)' }
    : {};

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        style={style}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      style={style}
    >
      {children}
    </button>
  );
}
