'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import ScrollReveal from '@/components/shared/ScrollReveal';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import { Heart, Sparkles, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-plum overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-plum-light via-plum to-black opacity-80" />
        <div className="grain-overlay" />

        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 text-center section-padding">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-6 font-body">
              Our Story
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-display text-4xl md:text-7xl lg:text-8xl text-ivory mb-6">
              About Us
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-ivory/70 text-lg md:text-xl font-body max-w-2xl mx-auto">
              A celebration of Rwandan heritage, craftsmanship, and the timeless
              elegance of Umushanana.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Sandra's Story */}
      <Section variant="light" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/5] bg-plum-light overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=800&q=80"
                    alt="Sandra, Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative frame */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-gold/30" />
                <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-gold/30" />
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal direction="left" delay={0.3}>
              <div className="space-y-8">
                <p className="text-gold text-sm tracking-[0.2em] uppercase font-body">
                  The Founder
                </p>
                <h2 className="text-section text-3xl md:text-5xl text-plum">
                  Sandra&apos;s Journey
                </h2>
                <div className="space-y-6 text-plum/70 font-body text-lg leading-relaxed">
                  <p>
                    Growing up in Kigali, Sandra watched her grandmother weave
                    traditional Rwandan textiles, each pattern telling a story of
                    family, celebration, and cultural pride. Those childhood
                    memories became the foundation of Plenty by Sandra.
                  </p>
                  <p>
                    After years of studying fashion design and working with
                    luxury brands internationally, Sandra returned home with a
                    vision: to elevate Umushanana into contemporary luxury while
                    honoring its deep cultural roots.
                  </p>
                  <p>
                    Today, every piece created in our Kigali atelier carries
                    Sandra&apos;s personal touch—a commitment to excellence, a
                    celebration of femininity, and a deep respect for the
                    artisans who bring each design to life.
                  </p>
                </div>
                <div className="pt-6">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png"
                    alt="Sandra's signature"
                    className="h-12 opacity-60"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* What is Umushanana */}
      <Section variant="dark" className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-6 font-body">
              Cultural Heritage
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-section text-3xl md:text-6xl text-ivory mb-12">
              What is Umushanana?
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="prose prose-invert prose-lg mx-auto text-ivory/80 font-body space-y-6">
              <p>
                Umushanana (pronounced oo-moo-shah-nah-nah) is the traditional
                attire of Rwandan women, worn for centuries during important
                ceremonies, celebrations, and rites of passage.
              </p>
              <p>
                The name comes from the Kinyarwanda word &quot;gushanana,&quot; meaning to
                drape or wrap—a reference to the elegant way the fabric is
                wrapped around the body, creating flowing, graceful lines that
                celebrate feminine beauty.
              </p>
              <p>
                Traditionally made from vibrant fabrics with intricate patterns,
                Umushanana is more than clothing—it&apos;s a symbol of cultural
                identity, a connection to ancestors, and a celebration of
                Rwandan womanhood. At Plenty by Sandra, we honor this heritage
                while creating pieces for the modern woman who carries her
                culture with pride.
              </p>
            </div>
          </ScrollReveal>

          {/* Cultural values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Heart,
                title: 'Made with Love',
                description: 'Each piece is handcrafted with care and intention',
              },
              {
                icon: Sparkles,
                title: 'Cultural Pride',
                description: 'Celebrating Rwandan heritage in every stitch',
              },
              {
                icon: Award,
                title: 'Artisan Excellence',
                description: 'Supporting skilled local craftspeople',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} direction="up" delay={0.4 + i * 0.1}>
                <div className="text-center space-y-4">
                  <item.icon className="w-12 h-12 text-gold mx-auto" />
                  <h4 className="text-xl font-display text-gold">{item.title}</h4>
                  <p className="text-ivory/70 font-body text-sm">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section variant="light" className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-6 font-body">
              Our Mission
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-section text-3xl md:text-5xl text-plum mb-8">
              Made in Rwanda,
              <br />
              <span className="text-gold">Loved Worldwide</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-plum/70 font-body text-lg leading-relaxed max-w-2xl mx-auto">
              We believe in the power of fashion to preserve culture, empower
              communities, and celebrate the beauty of diversity. Every
              Umushanana we create supports Rwandan artisans and keeps our
              traditions alive for future generations.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      <WhatsAppButton />
    </>
  );
}
