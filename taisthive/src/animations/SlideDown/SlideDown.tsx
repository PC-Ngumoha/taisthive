'use client';
import React, { type JSX, useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function SlideDown({
  children,
  className = '',
  delay = 0.5,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const controls = useAnimation();

  // Runs animation on component only when user scrolls to it
  // Does this only when the component mounts on page load
  useEffect(() => {
    // Attaches intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Runs once: Is target elements intersection &
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          controls.start({ y: 0, opacity: 1 });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    // If target element exists, then observe
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // If target element still exist, stop observing
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, isInView]);

  return (
    <motion.div
      layout
      initial={{ y: -100, opacity: 0 }}
      animate={controls}
      transition={{
        duration: 0.5,
        ease: 'easeIn',
        delay: delay,
      }}
      ref={ref}
      className={className}
    >
      {children}
    </motion.div>
  );
}
