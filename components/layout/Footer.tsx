'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-plum text-ivory section-padding pt-20 pb-8">
      <div className="grain-overlay" />
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-display text-gold">Plenty by Sandra</h3>
            <p className="text-ivory/70 font-body leading-relaxed max-w-xs">
              Dressed in Culture. Draped in Love. Exquisite Umushanana gowns
              handcrafted in Kigali, Rwanda.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/plentyby_sandra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gold/30 rounded-full hover:bg-gold hover:text-plum transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="tel:+250784477503"
                className="p-3 border border-gold/30 rounded-full hover:bg-gold hover:text-plum transition-colors duration-300"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-display text-gold">Explore</h4>
            <nav className="flex flex-col gap-4">
              <Link
                href="/collections"
                className="text-ivory/70 hover:text-gold transition-colors duration-300 font-body"
              >
                Collections
              </Link>
              <Link
                href="/about"
                className="text-ivory/70 hover:text-gold transition-colors duration-300 font-body"
              >
                About
              </Link>
              <Link
                href="/custom-orders"
                className="text-ivory/70 hover:text-gold transition-colors duration-300 font-body"
              >
                Custom Orders
              </Link>
              <Link
                href="/contact"
                className="text-ivory/70 hover:text-gold transition-colors duration-300 font-body"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-display text-gold">Stay Connected</h4>
            <p className="text-ivory/70 font-body text-sm">
              Be the first to see new pieces and exclusive collections.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="bg-plum-light/50 border border-gold/30 px-4 py-3 text-ivory placeholder:text-ivory/50 font-body focus:outline-none focus:border-gold transition-colors"
              />
              <motion.button
                type="submit"
                className="bg-gold text-plum px-6 py-3 font-medium text-sm hover:bg-gold-light transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gold/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-ivory/70">
              <MapPin size={18} className="text-gold" />
              <span className="font-body text-sm">Kigali, Rwanda</span>
            </div>
            <div className="flex items-center gap-2 text-ivory/70">
              <Phone size={18} className="text-gold" />
              <a
                href="tel:+250784477503"
                className="font-body text-sm hover:text-gold transition-colors"
              >
                +250 784 477 503
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ivory/50 text-xs font-body">
            © {new Date().getFullYear()} Plenty by Sandra. All rights reserved.
          </p>
          <p className="text-ivory/50 text-xs font-body flex items-center gap-1">
            Made with <Heart size={12} className="text-rose fill-rose" /> in Kigali
          </p>
        </div>
      </div>
    </footer>
  );
}
