'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';

interface SectionProps extends HTMLMotionProps<'section'> {
  variant?: 'light' | 'dark';
  fullHeight?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  variant = 'light',
  fullHeight = false,
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <motion.section
      className={clsx(
        'relative',
        variant === 'dark' ? 'bg-plum text-ivory' : 'bg-ivory text-plum',
        fullHeight && 'min-h-screen',
        'section-padding',
        className
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      {...props}
    >
      {variant === 'dark' && <div className="grain-overlay" />}
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
}
