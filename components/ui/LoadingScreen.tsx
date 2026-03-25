'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  const taglineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const brandName = 'Plenty by Sandra';

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-plum"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex flex-wrap justify-center gap-1">
            {brandName.split('').map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="text-3xl md:text-5xl font-display text-gold"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>
          <motion.p
            className="mt-6 text-sm md:text-base font-body text-rose tracking-widest uppercase"
            variants={taglineVariants}
            initial="hidden"
            animate="visible"
          >
            Dressed in Culture. Draped in Love.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
