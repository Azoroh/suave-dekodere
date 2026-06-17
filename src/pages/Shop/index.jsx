import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductCard } from '../../components/ui/ProductCard';
import { SectionLabel } from '../../components/ui/SectionLabel';

// Mock data for initial catalog
const products = [
  {
    id: 1,
    name: '4K Smart PTZ Camera',
    category: 'Security',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=800',
    description: 'High-definition outdoor security camera with night vision and motion tracking.'
  },
  {
    id: 2,
    name: 'Modern Velvet Sofa',
    category: 'Furniture',
    price: 350000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
    description: 'Custom-built ergonomic sofa by Dekodere, available in multiple colors.'
  },
  {
    id: 3,
    name: 'Smart Hub Pro',
    category: 'Smart Home',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
    description: 'Central control for all your smart home devices and automation routines.'
  },
  {
    id: 4,
    name: 'Crystal Pendant Light',
    category: 'Lighting',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1543198126-a4ad8e47fb71?auto=format&fit=crop&q=80&w=800',
    description: 'Elegant interior lighting fixture designed to enhance modern living spaces.'
  },
  {
    id: 5,
    name: '5KW Hybrid Inverter',
    category: 'Solar',
    price: 780000,
    image: 'https://images.unsplash.com/photo-1621905252507-b35242f8969d?auto=format&fit=crop&q=80&w=800',
    description: 'High-efficiency pure sine wave inverter for residential solar systems.'
  },
  {
    id: 6,
    name: 'Smart Door Lock',
    category: 'Security',
    price: 95000,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
    description: 'Biometric and remote-access door lock for enhanced home security.'
  }
];

const categories = ['All', 'Security', 'Furniture', 'Smart Home', 'Lighting', 'Solar'];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'All';

  const handleCategoryChange = (cat) => {
    if (cat === 'All') {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete('category');
      setSearchParams(newParams);
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="bg-surface min-h-screen pt-32 pb-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <SectionLabel label="Retail Catalog" />
          <h1 className="text-4xl md:text-5xl font-bold text-[#30332f] mt-4 mb-6">
            Premium Solutions <br /> For Your Lifestyle
          </h1>
          <p className="text-secondary opacity-70 max-w-2xl text-lg">
            Browse our curated selection of high-end hardware and custom furniture. 
            Direct ordering available for all items.
          </p>
        </header>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-8 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 md:px-6 py-2 text-[10px] md:text-xs font-label uppercase tracking-widest transition-all duration-300 rounded-full border ${
                activeCategory.toLowerCase() === cat.toLowerCase()
                  ? 'bg-[#4b6367] text-white border-[#4b6367]'
                  : 'bg-white text-[#30332f] border-outline-variant/20 hover:border-[#4b6367] hover:text-[#4b6367]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid with stable whole-grid transition */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
            >

              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center opacity-50">
                  <p className="text-lg italic">No items found in this category.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-[#30332f] text-white rounded-sm text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="opacity-70 mb-8 max-w-xl mx-auto">
            We offer custom sourcing for specific technical hardware and bespoke furniture design services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#30332f] font-label uppercase text-xs tracking-widest hover:bg-[#4b6367] hover:text-white transition-all duration-300">
              Request Custom Quote
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/30 text-white font-label uppercase text-xs tracking-widest hover:bg-white/10 transition-all duration-300">
              Download Full Catalog
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Shop;
