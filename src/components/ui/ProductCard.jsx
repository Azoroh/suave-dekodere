import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

export const ProductCard = ({ product }) => {
  const { name, category, price, image, description } = product;

  return (
    <div className="group bg-white border border-outline-variant/10 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-500">
      <div className="relative aspect-square overflow-hidden bg-surface">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-label uppercase tracking-widest text-[#4b6367] rounded-full shadow-sm">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-[#30332f] mb-2 group-hover:text-[#4b6367] transition-colors">
          {name}
        </h3>
        <p className="text-sm text-secondary opacity-70 mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/10">
          <span className="text-lg font-bold text-[#30332f]">
            {price ? `₦${price.toLocaleString()}` : 'Contact for Price'}
          </span>
          <Button 
            variant="secondary" 
            size="sm"
            className="!py-2 !px-4 text-[10px]"
            onClick={() => {
              const message = encodeURIComponent(`Hi Suave & Dekodere, I'm interested in the ${name}. Could you provide more details?`);
              window.open(`https://wa.me/2349074252223?text=${message}`, '_blank');
            }}
          >
            Enquire
          </Button>
        </div>
      </div>
    </div>
  );
};
