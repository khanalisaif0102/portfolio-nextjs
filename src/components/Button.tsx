import React from 'react';

/**
 * Button Component
 * 
 * A reusable button component with CSS transitions for performance.
 * Features scale-up and lift effect on hover, and scale-down on tap.
 * 
 * @param variant - Button style variant (primary or secondary)
 * @param size - Button size (sm, md, or lg)
 * @param children - Button content
 * @param className - Additional CSS classes
 * @param disabled - Disable button and animations
 * @param onClick - Click handler (accepts React.MouseEvent)
 * @param type - Button type attribute
 */
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled,
  onClick,
  type = 'button',
}) => {
  const baseStyles = 'rounded-lg font-semibold transition-all duration-200';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-dark hover:-translate-y-0.5 active:scale-95 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0'
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
