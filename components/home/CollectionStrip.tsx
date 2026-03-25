'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    name: 'Bridal Umushanana',
    description: 'For your most sacred day',
    image: 'https://images.unsplash.com/photo-1549488497-650a621eb54a?w=800&q=80',
    href: '/collections?category=bridal',
  },
  {
    name: 'Traditional Ceremonies',
    description: 'Honor your heritage',
    image: 'https://images.unsplash.com/photo-1583391733958-30d403118e91?w=800&q=80',
    href: '/collections?category=ceremony',
  },
  {
    name: 'Custom Orders',
    description: 'Designed just for you',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
    href: '/custom-orders',
  },
  {
    name: 'Accessories',
    description: 'The perfect finishing touches',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    href: '/collections?category=accessories',
  },
];

export default function CollectionStrip() {
  return (
    <section className="bg-ivory section-padding py-20">
      <div className="mb-12">
        <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4 font-body">
          Discover
        </p>
        <h2 className="text-section text-3xl md:text-5xl text-plum">
          Our Collections
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((collection, i) => (
          <Link key={collection.name} href={collection.href}>
            <motion.div
              className="group relative overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden bg-plum-light">
                <motion.img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-plum/90 via-plum/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl md:text-2xl font-display text-ivory mb-1">
                  {collection.name}
                </h3>
                <p className="text-ivory/70 text-sm font-body mb-4">
                  {collection.description}
                </p>
                <motion.div
                  className="flex items-center gap-2 text-gold text-sm font-body"
                  initial={{ x: 0 }}
                  whileHover={{ x: 8 }}
                >
                  <span>Explore</span>
                  <ArrowRight size={16} />
                </motion.div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
