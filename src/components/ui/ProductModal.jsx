import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';

export const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const { name, category, price, image, description } = product;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-hidden"
    >
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Content - Force non-scrollable and constrained height */}
      <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto max-h-[85vh] md:max-h-[75vh]"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 md:top-4 md:right-4 z-20 w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#30332f] hover:bg-white transition-colors shadow-md border border-outline-variant/10"
          >
            <span className="material-symbols-outlined text-xl md:text-2xl">close</span>
          </button>

          {/* Left: Image Container - Responsive sizing */}
          <div className="w-full md:w-1/2 bg-surface shrink-0 h-[30vh] md:h-auto overflow-hidden relative">
            <img 
              src={image} 
              alt={name} 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Details Container - Forced Fit */}
          <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between overflow-hidden">
            <div>
              <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 bg-secondary/10 text-[9px] md:text-[10px] font-label uppercase tracking-widest text-secondary rounded-full mb-3 md:mb-4">
                {category}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-[#30332f] mb-2 md:mb-4 leading-tight">
                {name}
              </h2>
              <p className="text-xl md:text-2xl font-bold text-[#4b6367]">
                {price ? `₦${price.toLocaleString()}` : 'Contact'}
              </p>
            </div>

            {/* Description - Auto-scales text size based on length or screen */}
            <div className="my-4 md:my-8 overflow-hidden">
              <h4 className="font-label text-[10px] uppercase tracking-widest text-on-surface/40 mb-2">
                Details
              </h4>
              <p className="text-secondary leading-relaxed text-sm md:text-lg italic line-clamp-[6] md:line-clamp-none">
                {description}
              </p>
            </div>

            {/* Action - Always anchored */}
            <div className="pt-4 md:pt-8 border-t border-outline-variant/10">
              <Button 
                variant="primary" 
                size="md"
                className="w-full py-4 md:py-5 text-[10px] md:text-xs uppercase tracking-[0.2em]"
                onClick={() => {
                  const message = encodeURIComponent(`Hi Suave & Dekodere, I'm interested in the ${name}.\n\nProduct Image: ${image}\n\nCould you provide more details?`);
                  window.open(`https://wa.me/2349074252223?text=${message}`, '_blank');
                }}
              >
                Enquire
              </Button>
            </div>
          </div>
        </motion.div>
    </motion.div>
  );
};
