import React from 'react';
import { motion } from 'framer-motion';

/**
 * Button Component
 * 
 * A reusable button component with Framer Motion animations.
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
  const baseStyles = 'rounded-lg font-semibold';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.05, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ duration: 0.2 }}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
};
