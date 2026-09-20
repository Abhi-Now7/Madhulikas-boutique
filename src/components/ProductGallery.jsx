import React, { useState } from 'react';
import { motion } from 'framer-motion';

const COLLECTION_TYPES = [
  { id: 'all', label: 'All Styles', color: 'heritage-gold' },
  { id: 'jamdani', label: 'Jamdani Collection', desc: 'Intricate hand-woven elegance' },
  { id: 'katha', label: 'Katha Collection', desc: 'Hand-stitched contemporary wear' },
  { id: 'modal-silk', label: 'Modal & Silk', desc: 'Luxe flowing silhouettes' },
  { id: 'cotton-linen', label: 'Cotton & Linen', desc: 'Everyday sophistication' },
];

const collections = {
  jamdani: Array.from({ length: 14 }, (_, i) => ({ type: 'jamdani', id: i })),
  katha: Array.from({ length: 14 }, (_, i) => ({ type: 'katha', id: i })),
  'modal-silk': Array.from({ length: 6 }, (_, i) => ({ type: 'modal-silk', id: i })),
  'cotton-linen': Array.from({ length: 13 }, (_, i) => ({ type: 'cotton-linen', id: i })),
};

export default function ProductGallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts =
    activeFilter === 'all'
      ? Object.values(collections).flat()
      : collections[activeFilter];

  return (
    <section id="products" className="py-20 md:py-32 bg-soft-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-5xl md:text-6xl font-light mb-6">
            Shop Our Collections
          </h2>
          <p className="text-lg text-primary-dark/60 max-w-2xl mx-auto">
            Handcrafted garments that celebrate heritage fabric traditions in contemporary silhouettes.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {COLLECTION_TYPES.map((collection) => (
            <motion.button
              key={collection.id}
              onClick={() => setActiveFilter(collection.id)}
              className={`px-6 py-2 rounded-sm font-medium transition-all ${
                activeFilter === collection.id
                  ? 'bg-heritage-gold text-white'
                  : 'bg-white border-2 border-heritage-gold/30 text-primary-dark hover:border-heritage-gold'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {collection.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
          layout
        >
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={`${product.type}-${product.id}`}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              layout
            >
              {/* Image */}
              <img
                src={`/Assets/Products/${product.type}/IMG-20260918-WA${String(product.id).padStart(4, '0')}.jpg`}
                alt={`${product.type} styled look`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23f9f8f6%22 width=%22400%22 height=%22400%22/%3E%3C/svg%3E';
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

              {/* Label */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              >
                <p className="text-white font-serif text-lg capitalize">
                  {product.type.replace('-', ' & ')}
                </p>
                <p className="text-white/80 text-sm">Heritage wear</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-primary-dark/60 mb-6">
            Found something you love? Let's make it happen.
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 bg-heritage-gold text-white font-medium rounded-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Place Your Order
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

