'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/collections', label: 'Collections' },
  { href: '/about', label: 'About' },
  { href: '/custom-orders', label: 'Custom Orders' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isDarkPage = pathname === '/about' || pathname === '/custom-orders';

  return (
    <>
      <motion.nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
          'section-padding py-4',
          isScrolled
            ? 'bg-plum/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <motion.span
              className={clsx(
                'text-xl md:text-2xl font-display tracking-wide',
                isScrolled ? 'text-gold' : 'text-gold'
              )}
              whileHover={{ scale: 1.02 }}
            >
              Plenty by Sandra
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'text-sm font-body tracking-wide transition-colors duration-300',
                  pathname === link.href
                    ? 'text-gold'
                    : isScrolled
                    ? 'text-ivory/80 hover:text-gold'
                    : 'text-plum/80 hover:text-gold'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={clsx(
              'md:hidden relative z-10 p-2',
              isScrolled ? 'text-gold' : 'text-plum'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-30 bg-plum/95 backdrop-blur-md md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={clsx(
                      'text-2xl font-display tracking-wide',
                      pathname === link.href ? 'text-gold' : 'text-ivory'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
