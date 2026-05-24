import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  const base = 'rounded-full font-semibold transition-all duration-200 inline-flex items-center justify-center';
  const variants = {
    primary: 'bg-mara-500 text-white hover:bg-mara-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border-2 border-mara-500 text-mara-500 hover:bg-mara-50',
  };
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-5 py-2',
    lg: 'px-7 py-3 text-lg',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
