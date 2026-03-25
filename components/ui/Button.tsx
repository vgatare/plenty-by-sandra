'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 font-body';

  const variantStyles = {
    primary:
      'bg-gold text-plum hover:bg-gold-light border border-gold/20 hover:scale-105',
    outline:
      'bg-transparent text-gold border border-gold hover:bg-gold hover:text-plum',
    ghost: 'bg-transparent text-plum hover:text-gold',
  };

  const sizeStyles = {
    sm: 'px-6 py-3 text-xs',
    md: 'px-8 py-4 text-sm',
    lg: 'px-10 py-5 text-base',
  };

  return (
    <motion.button
      className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
