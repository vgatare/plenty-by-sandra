'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/shared/ScrollReveal';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import Button from '@/components/ui/Button';
import { MapPin, Phone, Instagram, Mail, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will respond within 24 hours.');
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'Kigali, Rwanda',
      href: 'https://maps.google.com/?q=Kigali,Rwanda',
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '+250 784 477 503',
      href: 'tel:+250784477503',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@plentyby_sandra',
      href: 'https://instagram.com/plentyby_sandra',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@plentybysandra.com',
      href: 'mailto:hello@plentybysandra.com',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-plum overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-plum-light via-plum to-black opacity-80" />
        <div className="grain-overlay" />

        <div className="relative z-10 text-center section-padding">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-6 font-body">
              Get in Touch
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-display text-4xl md:text-7xl lg:text-8xl text-ivory mb-6">
              Contact Us
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-ivory/70 text-lg md:text-xl font-body max-w-xl mx-auto">
              We would love to hear from you. Visit our atelier or reach out
              anytime.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-ivory section-padding py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, i) => (
              <ScrollReveal key={item.label} direction="up" delay={0.1 + i * 0.1}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block p-8 bg-plum-light/30 border border-gold/20 hover:border-gold/50 transition-colors duration-300 text-center group"
                >
                  <item.icon className="w-10 h-10 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-gold text-xs tracking-widest uppercase mb-2 font-body">
                    {item.label}
                  </p>
                  <p className="text-plum font-body group-hover:text-gold transition-colors">
                    {item.value}
                  </p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="bg-plum text-ivory section-padding py-24 md:py-32">
        <div className="grain-overlay" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4 font-body">
                  Send a Message
                </p>
                <h2 className="text-section text-3xl md:text-5xl text-ivory mb-8">
                  Let&apos;s Start a Conversation
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-ivory/80 font-body text-sm mb-2">
                      Your Name *
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

                  <div>
                    <label className="block text-ivory/80 font-body text-sm mb-2">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-plum-light/50 border border-gold/30 px-4 py-3 text-ivory placeholder:text-ivory/40 font-body focus:outline-none focus:border-gold transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Map Placeholder */}
            <ScrollReveal direction="left" delay={0.3}>
              <div>
                <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4 font-body">
                  Our Location
                </p>
                <h2 className="text-section text-3xl md:text-5xl text-ivory mb-8">
                  Visit Our Atelier
                </h2>

                {/* Google Maps Embed Placeholder */}
                <div className="aspect-square bg-plum-light border border-gold/20 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.583059032646!2d30.0580!3d-1.9536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca77b6a5c5b01%3A0x8e6a0b0c0d0e0f10!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(1) contrast(1.2) brightness(0.9)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Plenty by Sandra Location"
                  />
                </div>

                <div className="mt-8 space-y-4 text-ivory/70 font-body">
                  <p>
                    Our atelier is located in the heart of Kigali, where
                    tradition meets modern luxury.
                  </p>
                  <p>
                    <strong className="text-gold">Hours:</strong>
                    <br />
                    Monday - Saturday: 9am - 6pm
                    <br />
                    Sunday: By appointment
                  </p>
                  <p className="text-sm">
                    <em>Appointments recommended for personalized consultations.</em>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
}
