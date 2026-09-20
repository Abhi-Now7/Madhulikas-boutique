import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TESTIMONIALS = [
  { id: 1, video: '/Assets/Testimonials/VID-20260918-WA0018.mp4' },
  { id: 2, video: '/Assets/Testimonials/VID-20260918-WA0019.mp4' },
  { id: 3, video: '/Assets/Testimonials/VID-20260918-WA0025.mp4' },
  { id: 4, video: '/Assets/Testimonials/VID-20260918-WA0028.mp4' },
  { id: 5, video: '/Assets/Testimonials/VID-20260918-WA0032.mp4' },
];

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-primary-dark text-white relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full bg-gradient-to-b from-heritage-gold/5 to-transparent rounded-b-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Hero Section - Success Stories Theme */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-5xl md:text-7xl font-light mb-6 leading-tight">
            Real Stories, <br />
            <span className="text-heritage-gold">Real Success</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light">
            Meet the women who've discovered their signature style with Madhulika's
          </p>
        </motion.div>

        {/* Testimonial Videos - Auto-playing muted */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-2xl group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveVideo(testimonial.video)}
            >
              {/* Video - Auto-plays muted on loop */}
              <video
                src={testimonial.video}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                autoPlay
                loop
                muted
                playsInline
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Play Indicator - subtle */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-heritage-gold/80 transition-colors">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          className="text-center mt-20 p-8 md:p-12 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-3xl md:text-4xl font-light mb-6 text-white">
            "Every stitch tells a story. <br /> Every outfit is a celebration."
          </h3>
          <p className="text-white/60 max-w-xl mx-auto mb-8 font-light">
            From traditional occasions to modern celebrations, Madhulika's has been part of countless special moments. We believe fashion should be as unique as you are.
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 bg-heritage-gold text-white font-medium rounded-sm hover:bg-heritage-clay transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Share Your Story
          </motion.a>
        </motion.div>
      </div>

      {/* Video Modal with sound */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              className="relative w-full max-w-lg aspect-[9/16] rounded-xl overflow-hidden bg-black shadow-2xl"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-heritage-gold text-white rounded-full flex items-center justify-center transition-colors shadow-lg backdrop-blur-md text-xl"
                onClick={() => setActiveVideo(null)}
              >
                ✕
              </button>

              <video
                src={activeVideo}
                className="w-full h-full object-cover"
                autoPlay
                controls
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
