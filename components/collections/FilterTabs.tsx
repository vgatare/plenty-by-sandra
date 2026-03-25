'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';

type Category = 'all' | 'bridal' | 'ceremony' | 'custom';

interface FilterTabsProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'bridal', label: 'Bridal' },
  { value: 'ceremony', label: 'Ceremony' },
  { value: 'custom', label: 'Custom' },
];

export default function FilterTabs({ activeCategory, onCategoryChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={clsx(
            'px-6 py-3 text-sm font-body tracking-wide transition-colors duration-300 border',
            activeCategory === category.value
              ? 'bg-gold text-plum border-gold'
              : 'bg-transparent text-plum/70 border-plum/20 hover:border-gold/50 hover:text-gold'
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category.label}
        </motion.button>
      ))}
    </div>
  );
}
