'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

export const AnimatedTitle = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  // on-scroll animation
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['end end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [0.8, 1]);

  return (
    <motion.h2 ref={heroRef} style={{ opacity, scale }}>
      {children}
    </motion.h2>
  );
};
