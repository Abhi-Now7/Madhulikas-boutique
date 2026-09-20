import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactCTAs() {
  const whatsappNumber = "919830353411";
  const messageRef = useRef(null);
  const [orderList, setOrderList] = useState([]);
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(sessionStorage.getItem('orderList') || '[]');
    setOrderList(saved);
    if (saved.length > 0 && messageRef.current) {
      const orderSummary = saved.map((item, i) => `${i + 1}. ${item.fabric}: ${window.location.origin}${item.src}`).join('\n');
      messageRef.current.value = `Hi Madhulika's, I'm interested in ordering these items:\n\n${orderSummary}`;
    }
  }, []);

  const handleRemoveItem = (index) => {
    const updated = orderList.filter((_, i) => i !== index);
    setOrderList(updated);
    sessionStorage.setItem('orderList', JSON.stringify(updated));
    if (updated.length > 0 && messageRef.current) {
      const orderSummary = updated.map((item, i) => `${i + 1}. ${item.fabric}: ${window.location.origin}${item.src}`).join('\n');
      messageRef.current.value = `Hi Madhulika's, I'm interested in ordering these items:\n\n${orderSummary}`;
    } else if (messageRef.current) {
      messageRef.current.value = "Tell us about your project...";
    }
  };

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageRef.current?.value || "Hi, I'd love to explore the collections and place an order at Madhulika's!")}`;

  return (
    <section id="contact" className="py-20 md:py-32 bg-primary-dark text-white relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-5xl md:text-6xl font-light mb-6">
            Begin Your Journey
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Choose whichever suits your journey — immediate conversation or a structured request.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact form */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-lg p-8 md:p-12 border border-white/20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="font-serif text-3xl mb-4">Order Request Form</h3>
            <p className="text-white/70 mb-6">
              Share details about your vision — fabric, size, style — and we'll respond within 24 hours.
            </p>

            {/* Selected Items Preview */}
            {orderList.length > 0 && (
              <div className="mb-6 p-4 bg-white/5 border border-white/10 rounded-lg">
                <p className="text-sm font-medium text-white/80 mb-3">Your Selected Items ({orderList.length}):</p>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {orderList.map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-3 p-2 bg-white/5 rounded-sm cursor-pointer hover:bg-white/10 transition-colors"
                      onClick={() => setExpandedItem(item)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <img src={item.src} alt={item.fabric} className="w-12 h-12 rounded object-cover" />
                      <div className="flex-1">
                        <p className="text-sm text-white font-medium">{item.fabric}</p>
                        <p className="text-xs text-white/60">Item {idx + 1}</p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveItem(idx);
                        }}
                        className="text-white/60 hover:text-white text-lg transition-colors"
                      >
                        ✕
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! Your order request has been sent. We will contact you within 24 hours.');
            }}>
              {['Name', 'Email', 'Phone'].map((label) => (
                <div key={label}>
                  <label className="block text-sm mb-2 text-white/80">{label}</label>
                  <input
                    type="text"
                    required
                    placeholder={`Your ${label.toLowerCase()}`}
                    className="w-full bg-white/5 border border-white/20 rounded-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-heritage-gold transition-colors"
                  />
                </div>
              ))}
              <motion.button
                className="w-full bg-heritage-gold text-white font-medium py-3 rounded-sm mt-4 hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
              >
                {orderList.length > 0 ? `Submit Order (${orderList.length} item${orderList.length > 1 ? 's' : ''})` : 'Submit Request'}
              </motion.button>
            </form>
          </motion.div>

          {/* Direct contact & UPI Info */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-lg p-8 md:p-12 border border-white/20 flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <h3 className="font-serif text-3xl mb-4">Direct Conversation</h3>
              <p className="text-white/70 mb-6">
                Prefer to chat directly? Reach out via WhatsApp. All secure UPI payments are also accepted on this number.
              </p>
              <div className="space-y-4">
                {[
                  { icon: '💬', label: 'WhatsApp / Call', desc: '+91 98303 53411' },
                  { icon: '💳', label: 'UPI Payments', desc: 'Accepted directly on 9830353411' },
                  { icon: '🚚', label: 'Delivery', desc: 'Shipping securely across the country' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-5 bg-white/5 border border-white/5 rounded-sm">
                    <span className="text-2xl pt-1">{item.icon}</span>
                    <div>
                      <div className="font-medium">{item.label}</div>
                      <div className="text-white/60 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-medium py-4 rounded-sm text-center shadow-lg hover:bg-[#20bd5a] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp to Order
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Item Expansion Modal */}
      <AnimatePresence>
        {expandedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedItem(null)}
          >
            <motion.div
              className="bg-white rounded-lg p-4 max-w-sm w-full relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="absolute -top-10 -right-2 text-white p-2 text-2xl" onClick={() => setExpandedItem(null)}>✕</button>
              <img src={expandedItem.src} className="w-full h-auto rounded-lg mb-4" alt={`Enlarged ${expandedItem.fabric}`} />
              <p className="text-center font-serif text-lg mb-2 text-primary-dark">{expandedItem.fabric}</p>
              <p className="text-center text-sm text-primary-dark/60 mb-4">Viewing your selected item</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Global WhatsApp Button (shows in bottom right) */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/50 hover:bg-[#20bd5a] transition-all"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="sr-only">Contact us on WhatsApp</span>
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </section>
  );
}
