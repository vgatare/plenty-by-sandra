'use client';

import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1549488497-650a621eb54a?w=600&q=80',
  'https://images.unsplash.com/photo-1583391733958-30d403118e91?w=600&q=80',
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80',
  'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
  'https://images.unsplash.com/photo-1545959772-9ac4f4fe7a3c?w=600&q=80',
  'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80',
];

export default function InstagramGrid() {
  return (
    <section className="bg-ivory section-padding py-20">
      <div className="text-center mb-12">
        <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4 font-body">
          Follow Us
        </p>
        <a
          href="https://instagram.com/plentyby_sandra"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-3xl md:text-4xl font-display text-plum hover:text-gold transition-colors duration-300"
        >
          <Instagram size={32} />
          @plentyby_sandra
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <motion.a
            key={i}
            href="https://instagram.com/plentyby_sandra"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden bg-plum-light"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={src}
              alt={`Instagram post ${i + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-plum/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="text-gold" size={32} />
            </div>
          </motion.a>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="https://instagram.com/plentyby_sandra"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gold text-sm font-body hover:text-gold-light transition-colors"
        >
          See more on Instagram
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </a>
      </div>
    </section>
  );
}
