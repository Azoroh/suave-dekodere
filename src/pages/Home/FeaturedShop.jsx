import React from 'react';
import { Link } from 'react-router-dom';
import { SectionLabel } from '../../components/ui/SectionLabel';
import { Button } from '../../components/ui/Button';

const shopCategories = [
  { name: 'Security', count: '12 Items', image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=600' },
  { name: 'Smart Home', count: '8 Items', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=600' },
  { name: 'Furniture', count: '15 Items', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600' },
  { name: 'Solar', count: '10 Items', image: 'https://images.unsplash.com/photo-1621905252507-b35242f8969d?auto=format&fit=crop&q=80&w=600' },
];

export const FeaturedShop = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <SectionLabel label="Retail Catalog" />
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-[#30332f] mt-4">
              Premium Hardware & <br /> Custom Pieces
            </h2>
          </div>
          <Link to="/shop">
            <Button variant="outline" size="sm">Explore All Items</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shopCategories.map((cat) => (
            <Link 
              key={cat.name} 
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-1">{cat.name}</h3>
                <p className="text-[10px] uppercase tracking-widest opacity-60">{cat.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
