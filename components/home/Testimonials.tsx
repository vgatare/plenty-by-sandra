'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "My Umushanana from Plenty by Sandra made my wedding day absolutely magical. The craftsmanship, the attention to detail—it was everything I dreamed of and more.",
    author: 'Keza M.',
    event: 'Bridal',
  },
  {
    quote:
      "I felt like royalty wearing my custom gown to the traditional ceremony. Sandra understood exactly what I wanted and brought it to life beautifully.",
    author: 'Ishimwe D.',
    event: 'Traditional Ceremony',
  },
  {
    quote:
      "The quality is exceptional. You can feel the love and heritage in every stitch. This is more than fashion—it's art.",
    author: 'Umutoni G.',
    event: 'Custom Order',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-plum text-ivory section-padding py-24 md:py-32 relative overflow-hidden">
      <div className="grain-overlay" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4 font-body">
            Love Notes
          </p>
          <h2 className="text-section text-3xl md:text-5xl">
            Words from Our Brides
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="text-center"
            >
              <Quote
                size={48}
                className="text-gold/30 mx-auto mb-8"
              />

              <blockquote className="text-2xl md:text-4xl font-display leading-relaxed mb-8">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>

              <div className="space-y-2">
                <p className="text-gold font-display text-xl">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-ivory/50 text-sm font-body tracking-wide uppercase">
                  {testimonials[currentIndex].event}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 border border-gold/30 rounded-full hover:bg-gold hover:text-plum transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'bg-gold w-6' : 'bg-gold/30'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 border border-gold/30 rounded-full hover:bg-gold hover:text-plum transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
