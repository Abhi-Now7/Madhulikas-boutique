import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  { id: 1, video: '/Assets/Testimonials/VID-20260918-WA0018.mp4' },
  { id: 2, video: '/Assets/Testimonials/VID-20260918-WA0019.mp4' },
  { id: 3, video: '/Assets/Testimonials/VID-20260918-WA0025.mp4' },
  { id: 4, video: '/Assets/Testimonials/VID-20260918-WA0028.mp4' },
  { id: 5, video: '/Assets/Testimonials/VID-20260918-WA0032.mp4' },
];

export default function Testimonials() {
  const [playingVideo, setPlayingVideo] = useState(null);

  const handlePlay = (id, e) => {
    e.stopPropagation();
    setPlayingVideo(id);
    const video = e.currentTarget.closest('.video-card')?.querySelector('video');
    if (video) {
      video.muted = false;
      video.currentTime = 0; // Restart from beginning when they choose to listen
      video.play();
    }
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-primary-dark text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-5xl md:text-6xl font-light mb-6">
            Voices of Our Community
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Real stories from real people who've woven Madhulika's into their wardrobe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              className="video-card relative aspect-[9/16] rounded-lg overflow-hidden bg-white/10 cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <video
                src={testimonial.video}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted={playingVideo !== testimonial.id}
                playsInline
                controls={playingVideo === testimonial.id}
              />

              {playingVideo !== testimonial.id && (
                <div
                  className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors"
                  onClick={(e) => handlePlay(testimonial.id, e)}
                >
                  <motion.div
                    className="flex flex-col items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                      <svg
                        className="w-8 h-8 text-primary-dark ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="text-white font-medium text-sm drop-shadow-md">Tap to Listen</span>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-white/70 mb-6">
            Join the Madhulika's family — share your story with us.
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 bg-white text-primary-dark font-medium rounded-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Share Your Experience
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
