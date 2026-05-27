'use client';

import { motion } from 'framer-motion';

export default function Reveal({ children, className = '', direction = 'up', delay = 0 }) {
  const variants = {
    up: { opacity: 0, y: 45 },
    down: { opacity: 0, y: -45 },
    left: { opacity: 0, x: -55 },
    right: { opacity: 0, x: 55 },
  };

  return (
    <motion.div
      initial={variants[direction] || variants.up}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
