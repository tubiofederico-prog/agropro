import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium transition-colors rounded-lg flex items-center gap-2';

  const variantStyles = {
    primary: 'bg-blue-700 text-white hover:bg-blue-800 disabled:bg-gray-400',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:bg-gray-100',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 disabled:text-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 disabled:bg-gray-400',
    success: 'bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-400',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        'justify-center',
        className
      )}
      {...props}
    >
      {isLoading && <span className="animate-spin">⟳</span>}
      {children}
    </button>
  );
}
