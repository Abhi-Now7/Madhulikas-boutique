import React from 'react';
import { motion } from 'framer-motion';

export default function Story() {
  const storyPoints = [
    {
      number: '01',
      title: 'The Loom & The Legacy',
      description: 'Madhulika\'s began not as a brand, but as a conversation between tradition and tomorrow. We inherited centuries of Bengali weaving mastery—Jamdani patterns that once adorned emperors, Katha quilting that kept generations warm—and asked: how do we make this live in 2026?',
      accent: 'heritage-gold',
    },
    {
      number: '02',
      title: 'Where Hands Meet Design',
      description: 'Every fabric tells a story of artisans who\'ve perfected their craft across generations. We don\'t mass-produce. Instead, we collaborate with weavers and quilters who understand that a stitch isn\'t just functional—it\'s a signature, a whisper of intention.',
      accent: 'heritage-clay',
    },
    {
      number: '03',
      title: 'The Modern Drape',
      description: 'Heritage isn\'t about looking backward. It\'s about honoring what works while daring to reimagine it. Our Modal & Silk blends breathe like cotton but flow like dreams. Our Contemporary Katha pieces transform quilting into wearable art that turns heads at a Sunday brunch.',
      accent: 'heritage-gold',
    },
    {
      number: '04',
      title: 'You, Styled',
      description: 'When you wear Madhulika\'s, you\'re not just wearing fabric. You\'re wearing the story of a weaver in Dhaka, the precision of a quilter in Kolkata, and the audacity of a brand that refuses to choose between heritage and modernity. You\'re choosing authenticity.',
      accent: 'heritage-clay',
    },
  ];

  return (
    <section id="story" className="py-20 md:py-32 bg-soft-bg">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-5xl md:text-6xl font-light mb-6">Our Story</h2>
          <div className="w-16 h-px bg-heritage-gold mx-auto mb-6" />
          <p className="text-lg text-primary-dark/60 max-w-2xl mx-auto">
            Born from a conversation between yesterday and today, Madhulika's weaves heritage into every thread.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {storyPoints.map((point, idx) => (
            <motion.div
              key={point.number}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Left side: Number & Accent */}
              <div className={`md:col-span-3 ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                <motion.div
                  className="flex items-start justify-start md:flex-col md:items-end gap-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`text-6xl md:text-7xl font-serif font-light opacity-20 text-${point.accent}`}>
                    {point.number}
                  </div>
                  <div className={`hidden md:block w-12 h-px bg-${point.accent === 'heritage-gold' ? 'heritage-gold' : 'heritage-clay'}`} />
                </motion.div>
              </div>

              {/* Right side: Content */}
              <div className="md:col-span-9">
                <motion.div
                  className={`bg-gradient-to-br ${
                    point.accent === 'heritage-gold'
                      ? 'from-heritage-gold/5 to-heritage-clay/5'
                      : 'from-heritage-clay/5 to-heritage-gold/5'
                  } rounded-lg p-8 md:p-10 border border-heritage-gold/10`}
                  whileHover={{ borderColor: `var(--color-${point.accent})` }}
                >
                  <h3 className="font-serif text-3xl font-light mb-4 text-primary-dark">
                    {point.title}
                  </h3>
                  <p className="text-lg text-primary-dark/70 leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          className="mt-20 md:mt-32 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="font-serif text-2xl md:text-3xl font-light text-primary-dark mb-6">
            "Every thread has a story. <br /> Every stitch has a soul."
          </p>
          <div className="w-16 h-px bg-heritage-gold mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
