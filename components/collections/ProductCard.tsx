'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';

interface ProductCardProps {
  name: string;
  category: string;
  image: string;
  description: string;
  index: number;
}

export default function ProductCard({ name, category, image, description, index }: ProductCardProps) {
  return (
    <motion.div
      className="group relative cursor-pointer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
    >
      {/* Image Container */}
      <div className="aspect-[3/4] overflow-hidden bg-plum-light relative">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/50 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Content on hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <motion.span
            className="text-gold text-xs tracking-widest uppercase mb-2 font-body"
            initial={{ y: 20 }}
            whileHover={{ y: 0 }}
          >
            {category}
          </motion.span>
          <h3 className="text-2xl font-display text-ivory mb-2">
            {name}
          </h3>
          <p className="text-ivory/70 text-sm font-body mb-4 line-clamp-2">
            {description}
          </p>
          <motion.div
            className="flex items-center gap-2 text-gold text-sm font-medium"
            initial={{ x: 0 }}
            whileHover={{ x: 8 }}
          >
            <span>View Details</span>
            <ArrowRight size={16} />
          </motion.div>
        </div>
      </div>

      {/* Like button */}
      <motion.button
        className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gold hover:text-plum"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Heart size={18} />
      </motion.button>

      {/* Always visible info (mobile) */}
      <div className="md:hidden mt-4 text-center">
        <h3 className="text-lg font-display text-plum">{name}</h3>
        <p className="text-plum/60 text-sm font-body">{category}</p>
      </div>
    </motion.div>
  );
}
