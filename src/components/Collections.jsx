import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Collections() {
  const [expandedFabric, setExpandedFabric] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef(null);

  const imageMap = {
    jamdani: ['0001', '0005', '0007', '0011', '0012', '0016', '0017', '0021', '0023', '0024', '0036', '0039', '0041', '0042'],
    katha: ['0004', '0006', '0008', '0009', '0013', '0014', '0015', '0022', '0037', '0040', '0043', '0049', '0050', '0051'],
    'modal-silk': ['0002', '0010', '0044', '0045', '0052', '0053'],
    'cotton-linen': ['0003', '0046', '0047', '0048', '0054', '0055', '0056', '0057', '0058', '0059', '0060', '0061', '0062'],
  };

  const getProductImages = (fabricId) => {
    return (imageMap[fabricId] || []).map((num, i) => ({
      id: i,
      src: `/Assets/Products/${fabricId}/IMG-20260918-WA${num}.jpg`,
    }));
  };

  const getCollectionFromImage = (src) => {
    for (const [key] of Object.entries(imageMap)) {
      if (src.includes(key)) return key;
    }
    return null;
  };

  const handleExpand = (fabricId) => {
    const newValue = expandedFabric === fabricId ? null : fabricId;
    setExpandedFabric(newValue);
    if (newValue) {
      setTimeout(() => {
        galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const initiateOrder = (fabricName, imageSrc) => {
    const message = encodeURIComponent(
      `Hi Madhulika's, I'm interested in this style from the ${fabricName} collection: ` +
      `${window.location.origin}${imageSrc}`
    );
    window.open(`https://wa.me/919830353411?text=${message}`, '_blank');
  };

  const showcaseImages = [
    { src: '/Assets/Products/jamdani/IMG-20260918-WA0001.jpg' },
    { src: '/Assets/Products/katha/IMG-20260918-WA0040.jpg' },
    { src: '/Assets/Products/modal-silk/IMG-20260918-WA0045.jpg' },
    { src: '/Assets/Products/cotton-linen/IMG-20260918-WA0055.jpg' },
    { src: '/Assets/Products/jamdani/IMG-20260918-WA0007.jpg' },
    { src: '/Assets/Products/katha/IMG-20260918-WA0004.jpg' },
    { src: '/Assets/Products/modal-silk/IMG-20260918-WA0010.jpg' },
    { src: '/Assets/Products/cotton-linen/IMG-20260918-WA0062.jpg' },
    { src: '/Assets/Products/jamdani/IMG-20260918-WA0042.jpg' },
    { src: '/Assets/Products/katha/IMG-20260918-WA0051.jpg' },
  ];

  const fabrics = [
    {
      id: 'jamdani',
      name: 'Jamdani',
      description: 'Intricate hand-woven muslin with geometric patterns, a UNESCO heritage craft from Bengal.',
      heritage: 'Centuries-old weaving technique from Dhaka.',
      count: 14,
      color: 'from-amber-50 to-yellow-50',
    },
    {
      id: 'katha',
      name: 'Katha',
      description: 'Quilted cotton fabric with organic stitching patterns, perfect for contemporary wear.',
      heritage: 'Traditional quilting art blended with modern aesthetics.',
      count: 14,
      color: 'from-orange-50 to-red-50',
    },
    {
      id: 'modal-silk',
      name: 'Modal & Silk',
      description: 'Luxurious blend of modal and silk, draping beautifully with a soft sheen.',
      heritage: 'Inspired by classical Bengali silk traditions.',
      count: 6,
      color: 'from-rose-50 to-pink-50',
    },
    {
      id: 'cotton-linen',
      name: 'Cotton & Linen',
      description: 'Breathable, sustainable blend perfect for everyday elegance.',
      heritage: 'Timeless comfort meets modern sustainability.',
      count: 13,
      color: 'from-slate-50 to-gray-50',
    },
  ];

  return (
    <section id="collections" className="py-20 md:py-32 bg-soft-bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-5xl md:text-6xl font-light mb-6">Our Fabrics</h2>
          <p className="text-lg text-primary-dark/60 max-w-2xl mx-auto">
            Click on any collection to explore handcrafted garments made with heritage fabrics.
          </p>
        </motion.div>

        {/* Auto-scrolling showcase */}
        <div className="relative mb-16 -mx-6 overflow-hidden">
          <div className="flex gap-4 animate-scroll">
            {[...showcaseImages, ...showcaseImages].map((img, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-64 h-80 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => {
                  const collection = getCollectionFromImage(img.src);
                  if (collection) handleExpand(collection);
                }}
              >
                <img
                  src={img.src}
                  alt="Collection showcase"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {fabrics.map((fabric, idx) => (
            <motion.div
              key={fabric.id}
              className={`bg-gradient-to-br ${fabric.color} rounded-lg p-8 md:p-12 cursor-pointer group transition-all hover:shadow-lg`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => handleExpand(fabric.id)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-serif text-3xl font-light">{fabric.name}</h3>
                <span className="text-sm font-medium text-primary-dark/70">({fabric.count} styles)</span>
              </div>
              <p className="text-primary-dark/70 mb-4">{fabric.description}</p>

              <motion.div
                className="text-sm text-primary-dark/60 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Heritage: {fabric.heritage}
              </motion.div>

              <motion.div
                className="mt-4 text-sm font-medium text-primary-dark/50 flex items-center gap-2"
                animate={expandedFabric === fabric.id ? { opacity: 1 } : { opacity: 0.5 }}
              >
                {expandedFabric === fabric.id ? '✕ Close gallery' : '→ Click to view styles'}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Gallery */}
        <div ref={galleryRef} style={{ scrollMarginTop: '5rem' }}>
          <AnimatePresence>
            {expandedFabric && (
              <motion.div
                className="mt-12"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                <motion.h3
                  className="font-serif text-3xl font-light mb-8 text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {fabrics.find(f => f.id === expandedFabric)?.name} Collection
                </motion.h3>

                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {getProductImages(expandedFabric).map((img, idx) => (
                    <motion.div
                      key={img.id}
                      className="relative aspect-square rounded-lg overflow-hidden bg-white/50 group cursor-pointer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setSelectedImage({ fabric: fabrics.find(f => f.id === expandedFabric)?.name, src: img.src })}
                    >
                      <img
                        src={img.src}
                        alt={`${expandedFabric} style ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-medium bg-black/50 px-3 py-1 rounded-sm text-sm">View & Order</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="text-center mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.a
                    href="#contact"
                    className="inline-block px-8 py-3 bg-heritage-gold text-white font-medium rounded-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Order from {fabrics.find(f => f.id === expandedFabric)?.name}
                  </motion.a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

                     {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="bg-white rounded-lg p-4 max-w-sm w-full relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="absolute -top-10 -right-2 text-white p-2 text-2xl" onClick={() => setSelectedImage(null)}>✕</button>
              <img src={selectedImage.src} className="w-full h-auto rounded-lg mb-4" alt="Enlarged" />
              <button
                className="w-full bg-heritage-gold text-white font-medium py-3 mb-3 rounded-sm hover:opacity-90 transition-opacity"
                onClick={() => {
                  const existing = JSON.parse(sessionStorage.getItem('orderList') || '[]');
                  sessionStorage.setItem('orderList', JSON.stringify([...existing, selectedImage]));
                  setSelectedImage(null);
                  alert('Added to your request list! View it in the Order Form below.');
                }}
              >
                Add to Request Form
              </button>
              <button
                className="w-full bg-[#25D366] text-white font-medium py-3 rounded-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                onClick={() => initiateOrder(selectedImage.fabric, selectedImage.src)}
              >
                Message on WhatsApp
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
