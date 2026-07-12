import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * ScrollReveal Component
 * 
 * A reusable wrapper component that adds scroll-triggered reveal animations.
 * Elements fade in and slide up when they enter the viewport.
 * 
 * @param children - Child elements to animate
 * @param className - Additional CSS classes
 * @param delay - Animation delay in seconds
 */
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const ref = useRef(null);
  // Trigger animation when element enters viewport (once: true prevents re-animation)
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
