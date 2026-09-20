import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Aesthetic floating images for the background
  const floatingImages = [
    {
      src: '/Assets/Products/modal-silk/IMG-20260918-WA0045.jpg',
      className: 'absolute top-[15%] left-[5%] xl:left-[15%] w-20 h-32 md:w-40 md:h-56 rounded-full object-cover shadow-2xl opacity-50 md:opacity-90',
      animateParams: { y: [0, -20, 0], rotate: [-2, 2, -2] },
      duration: 7,
    },
    {
      src: '/Assets/Products/jamdani/IMG-20260918-WA0042.jpg',
      className: 'absolute bottom-[10%] left-[8%] xl:left-[20%] w-24 h-32 md:w-48 md:h-64 rounded-t-full object-cover shadow-2xl opacity-50 md:opacity-90',
      animateParams: { y: [0, 25, 0], rotate: [1, -3, 1] },
      duration: 9,
    },
    {
      src: '/Assets/Products/katha/IMG-20260918-WA0040.jpg',
      className: 'absolute top-[20%] right-[5%] xl:right-[15%] w-24 h-24 md:w-48 md:h-48 rounded-bl-[4rem] rounded-tr-[4rem] object-cover shadow-2xl opacity-50 md:opacity-90',
      animateParams: { y: [0, -15, 0], x: [0, 10, 0] },
      duration: 8,
    },
    {
      src: '/Assets/Products/cotton-linen/IMG-20260918-WA0055.jpg',
      className: 'absolute bottom-[15%] right-[8%] xl:right-[20%] w-20 h-28 md:w-40 md:h-56 rounded-[2rem] object-cover shadow-2xl opacity-50 md:opacity-90',
      animateParams: { y: [0, -20, 0], rotate: [-3, 1, -3] },
      duration: 10,
    },
  ];

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-soft-bg pt-20">
      {/* Animated background gradient blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-heritage-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-heritage-clay rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Floating Image Portals - Only show on desktop */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
        {floatingImages.map((img, i) => (
          <motion.img
            key={i}
            src={img.src}
            className={img.className.replace('hidden sm:block', '')}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: img.className.includes('md:opacity-90') ? 0.8 : 0.6,
              scale: 1,
              ...img.animateParams
            }}
            transition={{
              opacity: { duration: 1.5, delay: i * 0.2 },
              scale: { duration: 1.5, delay: i * 0.2 },
              y: { duration: img.duration, repeat: Infinity, ease: 'easeInOut' },
              x: { duration: img.duration, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: img.duration + 2, repeat: Infinity, ease: 'easeInOut' }
            }}
          />
        ))}
      </div>

      {/* Foreground Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center backdrop-blur-sm sm:backdrop-blur-none bg-white/30 sm:bg-transparent p-8 sm:p-0 rounded-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="text-heritage-gold uppercase tracking-[0.3em] text-sm font-medium">Boutique Fashion</span>
        </motion.div>

        <motion.h1
          className="font-serif text-6xl sm:text-7xl md:text-8xl font-light tracking-tight mb-6 text-primary-dark"
          variants={itemVariants}
        >
          Madhulika's
        </motion.h1>

        <motion.p
          className="font-sans text-lg md:text-xl text-primary-dark/80 mb-10 leading-relaxed max-w-2xl mx-auto font-light"
          variants={itemVariants}
        >
          Heritage Bengali aesthetics meets peak modernity. Discover hand-crafted garments that tell stories of tradition and contemporary style.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          variants={itemVariants}
        >
          <motion.a
            href="#collections"
            className="px-8 py-3 bg-primary-dark text-white font-medium rounded-sm hover:bg-black transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Collections
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 border-2 border-primary-dark text-primary-dark font-medium rounded-sm hover:bg-primary-dark hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-16 text-primary-dark/50 text-sm flex flex-col items-center"
          variants={itemVariants}
        >
          <span className="uppercase tracking-widest font-medium text-xs mb-2">Scroll To Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-12 bg-primary-dark/30"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
