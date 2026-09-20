import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  // Only show the navbar title when scrolled past the hero section
  const titleOpacity = useTransform(scrollY, [150, 250], [0, 1]);
  const titleY = useTransform(scrollY, [150, 250], [20, 0]);

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-nav-bg/90 backdrop-blur-md border-b border-primary-dark/5"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="/"
          className="text-2xl font-serif font-light origin-left"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          Madhulika's
        </motion.a>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 text-primary-dark/70">
          {['Collections', 'Story', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative"
              whileHover={{ color: '#1a1a1a' }}
            >
              {item}
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-px bg-heritage-gold"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-primary-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.div
              className="w-full h-0.5 bg-current"
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            />
            <motion.div
              className="w-full h-0.5 bg-current"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.div
              className="w-full h-0.5 bg-current"
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-nav-bg border-t"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {['Collections', 'Story', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg py-2"
                whileHover={{ paddingLeft: 8 }}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
