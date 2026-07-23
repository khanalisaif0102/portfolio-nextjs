import React, { useRef, useEffect, useState } from 'react';

/**
 * ScrollReveal Component
 * 
 * A reusable wrapper component that adds scroll-triggered reveal animations.
 * Elements fade in and slide up when they enter the viewport.
 * Uses Intersection Observer API for better performance than Framer Motion.
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
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '-100px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};
