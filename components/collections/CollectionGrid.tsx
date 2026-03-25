'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import FilterTabs from './FilterTabs';
import ProductCard from './ProductCard';

type Category = 'all' | 'bridal' | 'ceremony' | 'custom';

const products = [
  {
    id: 1,
    name: 'Royal Umushanana',
    category: 'bridal',
    image: 'https://images.unsplash.com/photo-1549488497-650a621eb54a?w=800&q=80',
    description: 'Our signature bridal gown with intricate beadwork and traditional motifs.',
  },
  {
    id: 2,
    name: 'Kigali Elegance',
    category: 'ceremony',
    image: 'https://images.unsplash.com/photo-1583391733958-30d403118e91?w=800&q=80',
    description: 'Perfect for traditional ceremonies, featuring rich fabrics and modern silhouette.',
  },
  {
    id: 3,
    name: 'Heritage Gown',
    category: 'custom',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
    description: 'Custom-designed piece honoring family traditions with contemporary flair.',
  },
  {
    id: 4,
    name: 'Golden Hour',
    category: 'bridal',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80',
    description: 'Champagne-toned bridal Umushanana with gold thread embroidery.',
  },
  {
    id: 5,
    name: 'Rose Ceremony',
    category: 'ceremony',
    image: 'https://images.unsplash.com/photo-1545959772-9ac4f4fe7a3c?w=800&q=80',
    description: 'Dusty rose accents meet traditional patterns for a romantic look.',
  },
  {
    id: 6,
    name: 'Bespoke Creation',
    category: 'custom',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    description: 'One-of-a-kind piece designed exclusively for your special occasion.',
  },
  {
    id: 7,
    name: 'Plum Majesty',
    category: 'bridal',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    description: 'Deep plum tones with subtle gold accents for the modern bride.',
  },
  {
    id: 8,
    name: 'Ancestral Grace',
    category: 'ceremony',
    image: 'https://images.unsplash.com/photo-1572556891268-d4b92f1d9190?w=800&q=80',
    description: 'Tribute to ancestral designs with authentic Rwandan patterns.',
  },
];

export default function CollectionGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-ivory section-padding py-20">
      <div className="text-center mb-12">
        <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4 font-body">
          Our Work
        </p>
        <h2 className="text-section text-3xl md:text-5xl text-plum mb-8">
          Collections
        </h2>
      </div>

      <FilterTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            index={index}
            name={product.name}
            category={product.category}
            image={product.image}
            description={product.description}
          />
        ))}
      </motion.div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-plum/50 font-body">
            No pieces found in this category.
          </p>
        </div>
      )}
    </section>
  );
}
