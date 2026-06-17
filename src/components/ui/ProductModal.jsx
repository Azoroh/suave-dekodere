import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';

export const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const { name, category, price, image, description } = product;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-6">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh]"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#30332f] hover:bg-white transition-colors shadow-md"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          {/* Left: Image Container */}
          <div className="w-full md:w-1/2 bg-surface shrink-0 h-[40vh] md:h-auto overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Details Container */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-secondary/10 text-[10px] font-label uppercase tracking-widest text-secondary rounded-full mb-4">
                {category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#30332f] mb-4">
                {name}
              </h2>
              <p className="text-2xl font-bold text-[#4b6367]">
                {price ? `₦${price.toLocaleString()}` : 'Contact for Price'}
              </p>
            </div>

            <div className="mb-10">
              <h4 className="font-label text-xs uppercase tracking-widest text-on-surface/40 mb-3">
                Product Details
              </h4>
              <p className="text-secondary leading-relaxed text-lg">
                {description}
              </p>
            </div>

            <div className="mt-auto pt-8 border-t border-outline-variant/10">
              <Button 
                variant="primary" 
                size="lg"
                className="w-full py-5 text-xs uppercase tracking-[0.2em]"
                onClick={() => {
                  const message = encodeURIComponent(`Hi Suave & Dekodere, I'm interested in the ${name}.\n\nProduct Image: ${image}\n\nCould you provide more details?`);
                  window.open(`https://wa.me/2349074252223?text=${message}`, '_blank');
                }}
              >
                Enquire via WhatsApp
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
