'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/250784477503"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-gold text-plum px-5 py-4 rounded-full shadow-lg hover:bg-gold-light transition-colors duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={24} />
      <span className="hidden md:inline font-body text-sm font-medium">
        Book a Fitting
      </span>
    </motion.a>
  );
}
