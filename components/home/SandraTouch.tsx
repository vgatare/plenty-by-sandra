'use client';

import Section from '@/components/ui/Section';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { Heart } from 'lucide-react';

export default function SandraTouch() {
  return (
    <Section variant="dark" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Quote Section */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-8">
              <p className="text-gold text-sm tracking-[0.2em] uppercase font-body">
                The Sandra Touch
              </p>

              <blockquote className="text-3xl md:text-5xl font-display leading-tight">
                <span className="text-gold text-6xl md:text-7xl block mb-4">&ldquo;</span>
                Each Umushanana is more than a garment&mdash;it&apos;s a love letter to
                Rwandan culture, stitched with the hands of our mothers and
                grandmothers.
                <span className="text-gold text-6xl md:text-7xl block mt-4">&rdquo;</span>
              </blockquote>

              <div className="flex items-center gap-4 pt-6">
                <div className="w-12 h-px bg-gold/50" />
                <Heart size={20} className="text-gold fill-gold" />
                <div className="w-12 h-px bg-gold/50" />
              </div>

              <p className="text-ivory/70 font-body text-lg">
                — Sandra, Founder & Creative Director
              </p>
            </div>
          </ScrollReveal>

          {/* Image/Visual */}
          <ScrollReveal direction="left" delay={0.3}>
            <div className="relative">
              <div className="aspect-[4/5] bg-plum-light overflow-hidden border border-gold/20">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80"
                  alt="Artisan at work"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-gold/30" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-gold/30" />
            </div>
          </ScrollReveal>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: 'Handcrafted',
              description: 'Every piece is meticulously handmade by skilled Rwandan artisans',
            },
            {
              title: 'Cultural Heritage',
              description: 'Preserving centuries-old techniques in every stitch',
            },
            {
              title: 'Made in Rwanda',
              description: 'Proudly celebrating and elevating Rwandan craftsmanship',
            },
          ].map((value, i) => (
            <ScrollReveal
              key={value.title}
              direction="up"
              delay={0.4 + i * 0.1}
              className="text-center"
            >
              <div className="space-y-4">
                <div className="w-12 h-px bg-gold/50 mx-auto" />
                <h4 className="text-xl font-display text-gold">{value.title}</h4>
                <p className="text-ivory/70 font-body text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
