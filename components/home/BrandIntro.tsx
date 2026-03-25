'use client';

import Section from '@/components/ui/Section';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function BrandIntro() {
  return (
    <Section variant="light" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-6 font-body">
            Our Story
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <h2 className="text-section text-4xl md:text-6xl lg:text-7xl text-plum mb-8">
            Born in Kigali.
            <br />
            <span className="text-gold">Rooted in Rwanda.</span>
            <br />
            Made for You.
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <p className="text-plum/70 text-lg md:text-xl font-body leading-relaxed max-w-2xl mx-auto">
            Every stitch tells a story. Every gown carries the spirit of Rwandan
            craftsmanship, passed down through generations and reimagined for the
            modern woman who honors her heritage.
          </p>
        </ScrollReveal>

        {/* Decorative divider */}
        <ScrollReveal direction="up" delay={0.4} className="mt-12">
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gold/50" />
            <div className="w-2 h-2 bg-gold rotate-45" />
            <div className="w-16 h-px bg-gold/50" />
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
