'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import ScrollReveal from '@/components/shared/ScrollReveal';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import Button from '@/components/ui/Button';
import { Scissors, Ruler, Mail, Upload, CheckCircle, MessageCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: '1. Consultation',
    description:
      'Share your vision with us. We discuss your event, preferences, and inspiration.',
  },
  {
    icon: Ruler,
    title: '2. Design & Measurement',
    description:
      'We create a custom design sketch and take precise measurements for perfect fit.',
  },
  {
    icon: Scissors,
    title: '3. Creation',
    description:
      'Our artisans handcraft your Umushanana with meticulous attention to detail.',
  },
  {
    icon: CheckCircle,
    title: '4. Fitting & Delivery',
    description:
      'Final fitting ensures perfection, then your gown is ready for your special day.',
  },
];

export default function CustomOrdersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon to discuss your custom order.');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-plum overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-plum-light via-plum to-black opacity-80" />
        <div className="grain-overlay" />

        <div className="relative z-10 text-center section-padding">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-6 font-body">
              Bespoke
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-display text-4xl md:text-7xl lg:text-8xl text-ivory mb-6">
              Custom Orders
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-ivory/70 text-lg md:text-xl font-body max-w-2xl mx-auto">
              Your vision, our craftsmanship. Together, we create something
              uniquely yours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Section */}
      <Section variant="light" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal direction="up" delay={0.1}>
              <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4 font-body">
                How It Works
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-section text-3xl md:text-5xl text-plum">
                The Custom Process
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} direction="up" delay={0.1 + i * 0.1}>
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-plum-light rounded-full flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-gold" />
                  </div>
                  <h3 className="text-xl font-display text-plum">{step.title}</h3>
                  <p className="text-plum/70 font-body text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Order Form Section */}
      <Section variant="dark" className="py-24 md:py-32">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <ScrollReveal direction="up" delay={0.1}>
              <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4 font-body">
                Get Started
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-section text-3xl md:text-5xl text-ivory mb-6">
                Tell Us About Your Vision
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-ivory/70 font-body">
                Fill out the form below and we will get back to you within 48 hours.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.4}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-ivory/80 font-body text-sm mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-plum-light/50 border border-gold/30 px-4 py-3 text-ivory placeholder:text-ivory/40 font-body focus:outline-none focus:border-gold transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-ivory/80 font-body text-sm mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-plum-light/50 border border-gold/30 px-4 py-3 text-ivory placeholder:text-ivory/40 font-body focus:outline-none focus:border-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label className="block text-ivory/80 font-body text-sm mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-plum-light/50 border border-gold/30 px-4 py-3 text-ivory placeholder:text-ivory/40 font-body focus:outline-none focus:border-gold transition-colors"
                    placeholder="+250 784 477 503"
                  />
                </div>

                {/* Event Date */}
                <div>
                  <label className="block text-ivory/80 font-body text-sm mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) =>
                      setFormData({ ...formData, eventDate: e.target.value })
                    }
                    className="w-full bg-plum-light/50 border border-gold/30 px-4 py-3 text-ivory font-body focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-ivory/80 font-body text-sm mb-2">
                  Tell Us About Your Vision *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full bg-plum-light/50 border border-gold/30 px-4 py-3 text-ivory placeholder:text-ivory/40 font-body focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Describe your dream Umushanana, the event, colors, any specific requirements..."
                />
              </div>

              {/* Upload */}
              <div>
                <label className="block text-ivory/80 font-body text-sm mb-2">
                  Upload Inspiration Images
                </label>
                <div className="border-2 border-dashed border-gold/30 rounded-lg p-8 text-center hover:border-gold/50 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-gold/50 mx-auto mb-3" />
                  <p className="text-ivory/60 font-body text-sm">
                    Drag and drop images here, or click to browse
                  </p>
                  <p className="text-ivory/40 font-body text-xs mt-1">
                    PNG, JPG up to 5MB
                  </p>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6">
                <Button type="submit" size="lg" className="w-full">
                  Submit Inquiry
                </Button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </Section>

      {/* WhatsApp CTA */}
      <section className="bg-ivory section-padding py-16 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-section text-2xl md:text-4xl text-plum">
            Prefer to Chat Directly?
          </h2>
          <p className="text-plum/70 font-body">
            Reach out to us on WhatsApp for a quick conversation about your custom order.
          </p>
          <a
            href="https://wa.me/250784477503"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-plum px-8 py-4 font-medium text-sm hover:bg-gold-light transition-colors duration-300"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
}
