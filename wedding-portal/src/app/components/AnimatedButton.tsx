'use client';

import { motion } from 'framer-motion';
import { buttonVariants } from '../utils/animations';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  onClick?: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function AnimatedButton({
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  type = 'button',
}: AnimatedButtonProps) {
  const baseStyles = 'rounded-lg font-medium transition-colors duration-200';
  
  const variantStyles = {
    primary: 'bg-rose-500 text-white hover:bg-rose-600 active:bg-rose-700',
    secondary: 'bg-rose-100 text-rose-700 hover:bg-rose-200 active:bg-rose-300',
    outline: 'border-2 border-rose-500 text-rose-500 hover:bg-rose-50 active:bg-rose-100',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  return (
    <motion.button
      onClick={onClick}
      variants={buttonVariants}
      initial="initial"
      whileHover={disabled ? undefined : "hover"}
      whileTap={disabled ? undefined : "tap"}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </motion.button>
  );
} 