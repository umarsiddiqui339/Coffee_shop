import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Droplet, Thermometer, Star, Clock, Award, ChevronRight } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('espresso');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const menuData = {
    espresso: {
      title: "Espresso Collection",
      description: "Pure, concentrated, and perfectly extracted.",
      items: [
        { name: "Noir Signature Blend", price: "$5.00", description: "Dark chocolate, blackberry, caramel", roast: "Dark", origin: "Blend", intensity: 9 },
        { name: "Single Origin Geisha", price: "$12.00", description: "Jasmine, bergamot, honey, bergamot", roast: "Light", origin: "Panama", intensity: 6 },
        { name: "Ristretto", price: "$4.50", description: "Shorter extraction, more intense and sweeter", roast: "Medium", origin: "Ethiopia", intensity: 8 },
        { name: "Espresso Macchiato", price: "$5.50", description: "Marked with a touch of steamed milk", roast: "Dark", origin: "Blend", intensity: 7 }
      ]
    },
    pourOver: {
      title: "Pour Over Experience",
      description: "Hand-brewed to highlight subtle notes.",
      items: [
        { name: "Ethiopia Yirgacheffe", price: "$7.00", description: "Floral, citrus, tea-like body", roast: "Light", origin: "Ethiopia", intensity: 5 },
        { name: "Kenya AA", price: "$7.50", description: "Blackcurrant, grapefruit, wine-like", roast: "Light-Medium", origin: "Kenya", intensity: 7 },
        { name: "Colombia Geisha", price: "$15.00", description: "Orange blossom, chocolate, cherry", roast: "Light", origin: "Colombia", intensity: 6 },
        { name: "Guatemala Antigua", price: "$7.00", description: "Cocoa, butterscotch, spice", roast: "Medium", origin: "Guatemala", intensity: 7 }
      ]
    },
    signature: {
      title: "Signature Creations",
      description: "Exclusive drinks you won't find anywhere else.",
      items: [
        { name: "Noir Latte", price: "$6.50", description: "Charcoal activated latte with dark cocoa and vanilla", roast: "Dark", origin: "Blend", intensity: 8 },
        { name: "Smoked Maple Cortado", price: "$6.00", description: "Maple, smoked salt, oat milk, double shot", roast: "Medium", origin: "Brazil", intensity: 7 },
        { name: "Golden Turmeric Latte", price: "$6.50", description: "Turmeric, ginger, honey, oat milk", roast: "None", origin: "Herbal", intensity: 3 },
        { name: "Honey Cinnamon Flat White", price: "$6.00", description: "Local honey, cinnamon, velvety microfoam", roast: "Medium", origin: "Colombia", intensity: 6 }
      ]
    },
    food: {
      title: "Artisanal Pastry",
      description: "Perfect companions to your coffee.",
      items: [
        { name: "Croissant aux Amandes", price: "$4.50", description: "Butter croissant, almond cream, sliced almonds, powdered sugar" },
        { name: "Pain au Chocolat", price: "$4.50", description: "Dark chocolate batons, flaky butter pastry" },
        { name: "Avocado Toast", price: "$9.00", description: "Sourdough, heirloom avocado, chili flakes, lemon zest" },
        { name: "Matcha Basque Cheesecake", price: "$7.00", description: "Creamy cheesecake with ceremonial matcha" }
      ]
    }
  };

  const categories = [
    { id: 'espresso', label: 'Espresso', icon: Coffee },
    { id: 'pourOver', label: 'Pour Over', icon: Droplet },
    { id: 'signature', label: 'Signature', icon: Star },
    { id: 'food', label: 'Pastry', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2020/01/28/31799-390439020_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
        
        <div className="relative h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-light mb-4">The Menu</h1>
            <p className="text-xl text-primary/60 max-w-2xl mx-auto">
              Curated selections for the discerning palate
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-accent text-black'
                    : 'bg-[#101010] text-primary/70 hover:bg-[#1a1a1a]'
                }`}
              >
                <cat.icon size={18} />
                <span>{cat.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-2">
                {menuData[activeCategory as keyof typeof menuData].title}
              </h2>
              <p className="text-primary/50">
                {menuData[activeCategory as keyof typeof menuData].description}
              </p>
            </div>

            <div className="space-y-4">
              {menuData[activeCategory as keyof typeof menuData].items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 10 }}
                  className="group bg-[#0a0a0a] hover:bg-[#101010] rounded-2xl p-6 transition-all cursor-pointer border border-white/5 hover:border-accent/20"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-medium">{item.name}</h3>
                        {'intensity' in item && (
                          <div className="flex gap-1">
                            {[...Array(item.intensity)].map((_, i) => (
                              <div key={i} className="w-1.5 h-4 bg-accent/40 rounded-full" />
                            ))}
                          </div>
                        )}
                      </div>
                      <p className="text-primary/60 text-sm mb-2">{item.description}</p>
                      {'roast' in item && (
                        <div className="flex gap-4 text-xs text-primary/40">
                          <span>Roast: {item.roast}</span>
                          <span>Origin: {item.origin}</span>
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-accent text-xl font-light">{item.price}</span>
                      <ChevronRight className="w-4 h-4 text-accent/0 group-hover:text-accent transition-all ml-2" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Info Note */}
        <div className="mt-16 p-8 bg-[#0a0a0a] rounded-2xl text-center border border-white/5">
          <Coffee className="w-8 h-8 text-accent mx-auto mb-4" />
          <p className="text-primary/60 text-sm">
            *Ask about our seasonal single-origin offerings and limited releases
          </p>
          <p className="text-primary/60 text-sm mt-2">
            *Plant-based milk alternatives available: Oat, Almond, Coconut
          </p>
        </div>
      </div>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#101010] rounded-2xl p-8 max-w-md w-full"
            >
              <h3 className="text-2xl font-light mb-2">{selectedItem.name}</h3>
              <p className="text-accent text-xl mb-4">{selectedItem.price}</p>
              <p className="text-primary/70 mb-6">{selectedItem.description}</p>
              {'roast' in selectedItem && (
                <div className="space-y-2 text-sm text-primary/50">
                  <p>Roast Level: {selectedItem.roast}</p>
                  <p>Origin: {selectedItem.origin}</p>
                  <p>Intensity: {selectedItem.intensity}/10</p>
                </div>
              )}
              <button
                onClick={() => setSelectedItem(null)}
                className="mt-6 w-full py-3 bg-accent/10 text-accent rounded-full hover:bg-accent hover:text-black transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
    </AnimatePresence>
    </div>
  );
};

export default Menu;