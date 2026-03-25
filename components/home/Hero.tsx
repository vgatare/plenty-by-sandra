'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function Hero() {
  const headline = 'Where Culture Meets Grace';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-plum">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-plum-light via-plum to-black opacity-80" />

      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-rose/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center section-padding">
        {/* Tagline */}
        <motion.p
          className="text-rose text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Dressed in Culture. Draped in Love.
        </motion.p>

        {/* Main headline - word by word stagger */}
        <motion.h1
          className="text-display text-5xl md:text-7xl lg:text-9xl text-ivory mb-8"
          initial="hidden"
          animate="visible"
        >
          {headline.split(' ').map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8 + i * 0.12,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-ivory/70 text-lg md:text-xl font-body max-w-xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          Exquisite Umushanana gowns handcrafted in Kigali, Rwanda.
          Where tradition meets timeless elegance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <Link href="/collections">
            <Button size="lg" variant="primary">
              Explore the Collection
            </Button>
          </Link>
          <Link href="/custom-orders">
            <Button size="lg" variant="outline">
              Custom Order
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <motion.div
            className="w-1 h-2 bg-gold rounded-full"
            animate={{
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
