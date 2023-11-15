'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { FC, useRef } from 'react';

// todo: add props to make it generic component

export const Hero: FC = () => {
  // Hero on-scroll animation
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['end end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0.6, 1], [1, 0.8]);

  return (
    <motion.div
      className="mx-auto text-center py-8 md:py-12"
      ref={heroRef}
      style={{ opacity, scale }}
    >
      <h1>Ukrainian Ensemble «Makivka»</h1>
      <p className="font-cursive text-3xl md:text-4xl">
        11 amazing women&apos;s voices
      </p>
    </motion.div>
  );
};